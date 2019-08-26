import smartcar as sc
from dotenv import load_dotenv

import os

from api.firebase_api import firebase

load_dotenv()

client = sc.AuthClient(
    client_id=os.getenv('CLIENT_ID'),
    client_secret=os.getenv('CLIENT_SECRET'),
    redirect_uri=os.getenv('REDIRECT_URI'),
    scope=['required:read_vehicle_info', 'required:read_location',
           'required:read_odometer', 'required:control_security'],
    test_mode=True
)


class Smartcar:
    def __init__(self, client):
        if not client:  # More error checking for client
            raise ValueError('Invalid SmartCar client!')

        self.client = client
        self.access = None

    def get_auth_url(self):
        auth_url = self.client.get_auth_url()
        print(auth_url)
        # Error check

        return auth_url

    def exchange_code(self, code):
        self.access = self.client.exchange_code(code)
        print(self.access)
        # Error check if code is valid

        firebase.set_access_token(self.access)
        return self.access

    def load_access_token(self):
        if self.access:
            return self.access

        self.access = firebase.get_access_token()
        if not self.access:
            return None
        return self.access

    def refresh_access_token(self):
        print('Refreshing access token...')
        if self.access:
            access = self.access
        else:
            access = firebase.get_access_token()
        if not access:
            return None

        print('    Ready to refresh...')
        self.access = self.client.exchange_refresh_token(
            access['refresh_token'])
        print('    Refreshed! Printing new access token...')
        print(self.access)
        # Error check if valid refresh token / refresh expired

        firebase.set_access_token(self.access)
        return self.access

    def get_vehicle_ids(self):
        if not self.load_access_token():
            return None

        vehicle_ids = sc.get_vehicle_ids(
            self.access['access_token'])['vehicles']
        print(vehicle_ids)
        # Error check if vehicles exists / access token expired

        return vehicle_ids

    def get_vehicle(self, vehicle_id):
        if not self.load_access_token():
            return None

        vehicle = Vehicle(
            vehicle_id,
            self.access['access_token'])
        print(vehicle)
        # Error check if vehicle exists / access token expired

        return vehicle


class Vehicle:
    def __init__(self, vehicle_id, access_token):
        self.vehicle_id = vehicle_id
        self.access_token = access_token
        self.vehicle = sc.Vehicle(
            vehicle_id,
            access_token
        )

    def _with_refresh(method):
        def wrap(self, *args, **kwargs):
            try:
                return method(self, *args, **kwargs)
            except sc.exceptions.AuthenticationException:
                self.refresh_token()
                return method(self, *args, **kwargs)
        return wrap

    @_with_refresh
    def info(self):
        return self.vehicle.info()

    @_with_refresh
    def location(self):
        return self.vehicle.location()

    @_with_refresh
    def odometer(self):
        return self.vehicle.odometer()

    @_with_refresh
    def lock(self):
        return self.vehicle.lock()

    @_with_refresh
    def unlock(self):
        return self.vehicle.unlock()

    @_with_refresh
    def vin(self):
        return self.vehicle.vin()

    def refresh_token(self):
        self.access_token = smartcar.refresh_access_token()['access_token']
        self.vehicle = sc.Vehicle(
            self.vehicle_id,
            self.access_token
        )


smartcar = Smartcar(client)
