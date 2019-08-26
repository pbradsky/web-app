import pyrebase
from dotenv import load_dotenv

import os
from datetime import datetime

load_dotenv()

config = {
    "apiKey": os.getenv('FIREBASE_API_KEY'),
    "authDomain": os.getenv('AUTH_DOMAIN'),
    "databaseURL": os.getenv('DATABASE_URL'),
    "projectId": os.getenv('PROJECT_ID'),
    "storageBucket": os.getenv('STORAGE_BUCKET'),
    "serviceAccount": os.getenv('SERVICE_ACCOUNT'),
    "messagingSenderId": os.getenv('MESSAGING_SENDER_ID'),
    "appId": os.getenv('APP_ID')
}


class Firebase:
    def __init__(self, config):
        print('NEW FIREBASE INIT')
        self.firebase = pyrebase.initialize_app(config)
        self.db = self.firebase.database()

    def set_access_token(self, access):
        access['expiration'] = str(access['expiration'])
        access['refresh_expiration'] = str(access['refresh_expiration'])
        self.db.child('access').set(access)

    def get_access_token(self):
        access = self.db.child('access').get().val()
        if not access:
            return access

        access['expiration'] = datetime.strptime(
            access['expiration'],
            '%Y-%m-%d %H:%M:%S.%f')
        access['refresh_expiration'] = datetime.strptime(
            access['refresh_expiration'],
            '%Y-%m-%d %H:%M:%S.%f')
        return access

    def add(self, key, item):
        self.db.child(key).push(item)

    def set(self, key, iid, item):
        self.db.child(key).child(iid).set(item)

    def get(self, key, iid):
        return self.db.child(key).child(iid).get().val()

    def get_all(self, key):
        return self.db.child(key).get().val().values()

    def update(self, key, iid, item):
        self.db.child(key).child(iid).update(item)

    def remove(self, key, iid):
        self.db.child(key).child(iid).remove()


firebase = Firebase(config)
