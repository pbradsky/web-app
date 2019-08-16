import React, { Component } from 'react';
import './App.css';
import Smartcar from '@smartcar/auth';

// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicle: {},
    };

    console.log(this.smartcar);
    this.smartcar = new Smartcar({
      clientId: process.env.REACT_APP_CLIENT_ID,
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
      scope: ['required:read_vehicle_info'],
      testMode: true,
      onComplete: this.onAuthComplete,
    });
  }

  onAuthComplete = (err, code, status) => {
    console.log(code);
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
