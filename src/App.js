import React, { Component } from 'react';
import './App.css';
import Smartcar from '@smartcar/auth';
import axios from 'axios';

// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicle: {},
    };

    console.log(process.env);
    this.smartcar = new Smartcar({
      clientId: process.env.REACT_APP_CLIENT_ID,
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
      scope: ['required:read_vehicle_info'],
      testMode: true,
      onComplete: this.onAuthComplete,
    });
  }

  onAuthComplete = (err, code, status) => {
    return axios.get(process.env.REACT_APP_SERVER + '/exchange',
              {params: { code }})
      .then(() =>
        axios.get(process.env.REACT_APP_SERVER + '/vehicle')
      )
      .then(res =>
        this.setState({vehicle: res.data})
      );
  }

  handleAuth = () => {
    this.smartcar.openDialog({forcePrompt: true});
  }

  render() {
    const { vehicle } = this.state;

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
            <div
              className='button'
              onClick={this.handleClick}
            >
              Lock/Unlock
            </div>
            <div className='vehicle-info'>
              <br />
              <h2>Vehicle Information</h2>
              <div>ID: {vehicle.id}</div>
              <div>Make: {vehicle.make}</div>
              <div>Model: {vehicle.model}</div>
              <div>Year: {vehicle.year}</div>
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
