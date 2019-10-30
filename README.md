# Jurne Web App
This is a web app for the Jurne project. Built using ReactJS, Flask, Firebase, and more.

The latest version of the production website is at jurne-test-web-app.appspot.com.

---
## Installation

There are two main modules to this app which communicate to each other, the ReactJS frontend and the Flask backend which are located in `frontend/` and `backend/`, respectively. Installation instructions are independent as the two modules are decoupled and only interact via RESTful requests. In order to run the app locally, you must install and run both the backend and the frontend, and also have valid development env credentials.

### Installing and Running the Backend
Make sure you have Python 3.6+ installed on your machine.

First, make sure you have virtualenv installed.
```sh
$ python3 -m pip install virtualenv
$ virtualenv --version
16.7.7
```

Then, create a virtualenv in e.g., `backend/env/` and install the requirements from `backend/requirements.txt`.
```sh
$ cd backend/
$ python3 -m virtualenv env
$ source env/bin/activate
(env) $ pip install -r requirements.txt
(env) $ deactivate
$
```

To run the project and connect to Firebase and the Smartcar API, you will need to have valid credentials in `backend/.env` and `backend/firebase-private-key.json` files. The contents of these can be found via your Firebase and Smartcar accounts. The files should contain the following fields:

`.env`
```sh
# Smartcar API credentials
CLIENT_ID=aaa-bbb-ccc-ddd-eee
CLIENT_SECRET=fff-ggg-hhh-iii-jjj
REDIRECT_URI=http://localhost:8000/exchange

# Firebase API credentials
API_KEY=abcdefghijkl
AUTH_DOMAIN=my-app.firebaseapp.com
DATABASE_URL=https://my-app.firebaseio.com
PROJECT_ID=my-app
STORAGE_BUCKET=my-app.appspot.com
MESSAGING_SENDER_ID=123456789
SERVICE_ACCOUNT=firebase-private-key.json
APP_ID=1:123456789:web:abcdef123456
```

`firebase-private-key.json`
```json
{
  "type": "",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
}
```

Finally, run the backend Flask app with:
```sh
$ cd backend/
$ source env/backend/activate
(env) $ python main.py
```

This should start the backend app. It can be reached via your web browser at `localhost:8000`. A simple check to see if the app is working is to go to [localhost:8000/login](http://localhost:8000/login). The page should redirect you to the Smartcar API which will prompt you to select a car and login (this is a test API so fake credentials work for login).

### Installing and Running the Frontend
Make sure you have at least node 8+.
```sh
$ node --version
v8.16.1
```

Go to the `frontend/` directory, install the required packages.
```sh
$ cd frontend/
$ npm install
```

Similarly to the backend installation, you will need to set up environment variables and API information to work with Smartcar and Firebase. For local development, you should create a `.env.development` file with the correct API information.

`.env.development`
```sh
# Smartcar API
REACT_APP_CLIENT_ID=aaa-bbb-ccc-ddd-eee
REACT_APP_REDIRECT_URI=https://javascript-sdk.smartcar.com/v2/redirect?app_origin=http://localhost:3000
REACT_APP_SERVER=http://localhost:8000

# Firebase API
REACT_APP_API_KEY=abcdefghijkl
REACT_APP_AUTH_DOMAIN=my-app.firebaseapp.com
REACT_APP_DATABASE_URL=https://my-app.firebaseio.com
REACT_APP_PROJECT_ID=my-app
REACT_APP_STORAGE_BUCKET=my-app.appspot.com
REACT_APP_MESSAGING_SENDER_ID=123456789
REACT_APP_APP_ID=1:123456789:web:abcdef123456
```

Finally, to run the React app:
```sh
npm start
```

This should bring up the frontend app on [localhost:3000](http://localhost:3000) and open it automatically in your browser when it is ready. You should be able to register a test account and then sign in and examine cars in the test fleet.

---
## Deployment
To deploy the app to Google Cloud Platform, you will first need access to the account and the correct production credentials. Then run `deploy.sh` and `npm run build-and-deploy` to deploy the backend and frontend, respectively (pushes and updates live website).