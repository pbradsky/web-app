from flask import Flask, redirect, request, jsonify
from flask_cors import CORS

from api.firebase_api import firebase
from api.smartcar_api import smartcar


app = Flask(__name__)
CORS(app)


@app.route('/login', methods=['GET'])
def login():
    auth_url = smartcar.get_auth_url()
    return redirect(auth_url)


@app.route('/exchange', methods=['GET'])
def exchange():
    print('EXCHANGE ROUTE')
    code = request.args.get('code')
    # in a production app you'll want to store this in some kind of
    # persistent storage
    print('EXCHANGED')

    smartcar.exchange_code(code)

    return '', 200


@app.route('/vehicle', methods=['GET'])
def vehicle():
    print('VEHICLE')

    # the list of vehicle ids
    vehicle_ids = smartcar.get_vehicle_ids()

    # instantiate the first vehicle in the vehicle id list
    vehicle = smartcar.get_vehicle(vehicle_ids[0])

    info = vehicle.info()
    print(info)

    firebase.set('vehicles', info['id'], info)

    return jsonify(info)


@app.route('/location', methods=['GET'])
def location():
    # For now, just use the first vehicle every time
    vehicle_ids = smartcar.get_vehicle_ids()
    vehicle = smartcar.get_vehicle(vehicle_ids[0])

    location = vehicle.location()['data']
    print(location)

    return jsonify(location)


@app.route('/odometer', methods=['GET'])
def odometer():
    # For now, just use the first vehicle every time
    vehicle_ids = smartcar.get_vehicle_ids()
    vehicle = smartcar.get_vehicle(vehicle_ids[0])

    odometer = vehicle.odometer()['data']
    print(odometer)

    return jsonify(odometer)


@app.route('/control', methods=['POST'])
def control():
    lock = request.args.get('lock')

    # For now, just use the first vehicle every time
    vehicle_ids = smartcar.get_vehicle_ids()
    vehicle = smartcar.get_vehicle(vehicle_ids[0])

    if lock:
        response = vehicle.lock()
    else:
        response = vehicle.unlock()
    print(response)

    return jsonify(response)


if __name__ == '__main__':
    app.run(port=8000)
