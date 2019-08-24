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
        if self.access:
            access = self.access
        else:
            access = firebase.get_access_token()
        if not access:
            return None

        self.access = self.client.exchange_refresh_token(
            access['refresh_token'])
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

        vehicle = sc.Vehicle(
            vehicle_id,
            self.access['access_token'])
        print(vehicle)
        # Error check if vehicle exists / access token expired

        return vehicle


smartcar = Smartcar(client)
