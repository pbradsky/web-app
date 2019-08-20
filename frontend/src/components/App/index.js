import React, { Component } from 'react';
import Smartcar from '@smartcar/auth';
import axios from 'axios';

import './index.css';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    'Access-Control-Max-Age': '3600',
    'Access-Control-Allow-Headers': 'x-requested-by'
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicle: {},
      location: {},
      odometer: {}
    };
    console.log('Hello app!');
    this.smartcar = new Smartcar({
      clientId: process.env.REACT_APP_CLIENT_ID,
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
      scope: ['required:read_vehicle_info', 'required:read_location',
              'required:read_odometer', 'required:control_security'],
      testMode: true,
      onComplete: this.onAuthComplete,
    });
  }

  onAuthComplete = (err, code, status) => {
    console.log('authenticating...');
    console.log(err, code, status);
    return axios.get(process.env.REACT_APP_SERVER + '/exchange',
              {params: { code }})
      .then(() => {
          console.log('exchange sent!')
          axios.get(process.env.REACT_APP_SERVER + '/vehicle')
            .then(res =>
              this.setState({vehicle: res.data})
            );
          axios.get(process.env.REACT_APP_SERVER + '/location')
            .then(res =>
              this.setState({location: res.data})
            );
          axios.get(process.env.REACT_APP_SERVER + '/odometer')
            .then(res =>
              this.setState({odometer: res.data})
            );
      })
      .catch(error => {
        console.log('ERROR IN EXCHANGE');
        console.log(error);
      });
  }

  handleAuth = () => {
    this.smartcar.openDialog({forcePrompt: true});
  }

  handleLock = () => {
    const params = {
      params: {
        lock: true
      }
    }

    axios.post(process.env.REACT_APP_SERVER + '/control',
               { ...config, ...params});
  }

  handleUnlock = () => {
    const params = {
      params: {
        lock: true
      }
    }

    axios.post(process.env.REACT_APP_SERVER + '/control',
               { ...config, ...params});
  }

  handleLocation = () => {
    axios.get(process.env.REACT_APP_SERVER + '/location')
      .then(res =>
        this.setState({location: res.data})
      );
  }

  handleOdometer = () => {
    axios.get(process.env.REACT_APP_SERVER + '/odometer')
      .then(res =>
        this.setState({odometer: res.data})
      );
  }

  render() {
    const { vehicle, location, odometer } = this.state;

    return (
      <div className='app'>
        <h1>Jūrne</h1>
        <p>
          Welcome ~ :) We are really happy to have you here.
          Learn more about our services and see other details
          on our website.
        </p>
        <div className='greeting'>
          {Object.keys(vehicle).length !== 0
            ? 'Logged in! Choose an action below.'
            : 'Press the button below to log in.'
          }
        </div>
        {Object.keys(vehicle).length !== 0
        ?
          <div>
            <div className='button-row'>
              <div
                className='button'
                onClick={this.handleLock}
              >
                Lock
              </div>
              <div
                className='button'
                onClick={this.handleUnlock}
              >
                Unlock
              </div>
            </div>
            <div className='button-row'>
              <div
                className='button'
                onClick={this.handleLocation}
              >
                Location
              </div>
              <div
                className='button'
                onClick={this.handleOdometer}
              >
                Odometer
              </div>
            </div>
            <div className='vehicle-info'>
              <br />
              <h2>Vehicle Information</h2>
              <div>ID: {vehicle.id}</div>
              <div>Make: {vehicle.make}</div>
              <div>Model: {vehicle.model}</div>
              <div>Year: {vehicle.year}</div>
              <div>Location: ({location.latitude},</div>
              <div className='indent'>{location.longitude})</div>
              <div>Odometer: {odometer.distance}</div>
            </div>
          </div>
        :
          <div
            className='button'
            onClick={this.handleAuth}
          >
            Request Access
          </div>
        }
      </div>
    );
  }

}

export default App;