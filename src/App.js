import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

const BACKEND_BASE_URI = 'http://localhost:8000';
const LOGIN_ENDPOINT = '/login';
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
      isLocked: true
    };
  }

  handleClick = event => {
    const { isLocked } = this.state;
    // TODO: check if isLocked is undefined if
    // anything happens, set isLocked to locked?

    this.setState({
      isLocked: !isLocked
    });
    event.preventDefault();
  }

  handleAuth = event => {
    axios.get(BACKEND_BASE_URI + LOGIN_ENDPOINT, config)
      .then(response => {
        console.log('RESPONSE');
        console.log(response);
        window.location.href = response.data;
      })
      .catch(error => {
        console.log('ERROR');
        console.log(error)
      });

    event.preventDefault();
  }

  render() {
    const { isLocked } = this.state;

    return (
      <div className='app'>
        <h1>Jūrne</h1>
        <p>
          Welcome ~ :) We are really happy to have you here.
          Learn more about our services and see other details
          on our website.
        </p>
        <p>
          Click the button below to Lock/Unlock your car.
        </p>
        <div className='button'
             onClick={this.handleAuth}
        >
          Request Access
        </div>
        <div className='button'
             onClick={this.handleClick}
        >
          {isLocked ? 'Unlock' : 'Lock'}
        </div>
      </div>
    );
  }

}

export default App;
