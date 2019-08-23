import pyrebase
from dotenv import load_dotenv

import os

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
        self.firebase = pyrebase.initialize_app(config)
        self.db = self.firebase.database()

    def add(self, key, item):
        self.db.child(key).push(item)

    def set(self, key, iid, item):
        self.db.child(key).child(iid).set(item)

    def get(self, key):
        return self.db.child(key).get().val().values()

    def update(self, key, iid, item):
        self.db.child(key).child(iid).update(item)

    def remove(self, key, iid):
        self.db.child(key).child(iid).remove()


firebase = Firebase(config)
