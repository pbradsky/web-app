import smartcar
from flask import Flask, redirect, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

import os

from firebase import firebase

load_dotenv()

app = Flask(__name__)
CORS(app)

client = smartcar.AuthClient(
    client_id=os.getenv('CLIENT_ID'),
    client_secret=os.getenv('CLIENT_SECRET'),
    redirect_uri=os.getenv('REDIRECT_URI'),
    scope=['required:read_vehicle_info', 'required:read_location',
           'required:read_odometer', 'required:control_security'],
    test_mode=True
)


@app.route('/login', methods=['GET'])
def login():
    auth_url = client.get_auth_url()
    return redirect(auth_url)


@app.route('/exchange', methods=['GET'])
def exchange():
    print('EXCHANGE ROUTE')
    code = request.args.get('code')
    # in a production app you'll want to store this in some kind of
    # persistent storage
    print('EXCHANGED')

    access = client.exchange_code(code)
    firebase.set_access_token(access)

    return '', 200


@app.route('/vehicle', methods=['GET'])
def vehicle():
    print('VEHICLE')
    access = firebase.get_access_token()
    if not access:
        return redirect('/login')

    # the list of vehicle ids
    vehicle_ids = smartcar.get_vehicle_ids(
        access['access_token'])['vehicles']

    # instantiate the first vehicle in the vehicle id list
    vehicle = smartcar.Vehicle(vehicle_ids[0], access['access_token'])

    info = vehicle.info()
    print(info)

    firebase.set('vehicles', info['id'], info)

    return jsonify(info)


@app.route('/location', methods=['GET'])
def location():
    access = firebase.get_access_token()
    if not access:
        return redirect('/login')

    # For now, just use the first vehicle every time
    vehicle_ids = smartcar.get_vehicle_ids(
        access['access_token'])['vehicles']
    vehicle = smartcar.Vehicle(vehicle_ids[0], access['access_token'])

    location = vehicle.location()['data']
    print(location)

    return jsonify(location)


@app.route('/odometer', methods=['GET'])
def odometer():
    access = firebase.get_access_token()
    if not access:
        return redirect('/login')

    # For now, just use the first vehicle every time
    vehicle_ids = smartcar.get_vehicle_ids(
        access['access_token'])['vehicles']
    vehicle = smartcar.Vehicle(vehicle_ids[0], access['access_token'])

    odometer = vehicle.odometer()['data']
    print(odometer)

    return jsonify(odometer)


@app.route('/control', methods=['POST'])
def control():
    access = firebase.get_access_token()
    if not access:
        return redirect('/login')

    lock = request.args.get('lock')

    # For now, just use the first vehicle every time
    vehicle_ids = smartcar.get_vehicle_ids(
        access['access_token'])['vehicles']
    vehicle = smartcar.Vehicle(vehicle_ids[0], access['access_token'])

    if lock:
        response = vehicle.lock()
    else:
        response = vehicle.unlock()
    print(response)

    return jsonify(response)


if __name__ == '__main__':
    app.run(port=8000)
