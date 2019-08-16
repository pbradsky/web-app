import React, { Component } from 'react';
import queryString from 'query-string';
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

    const queryValues = queryString.parse(this.props.location.search);
    const isLoggedIn = 'code' in queryValues ? true : false;

    this.state = {
      accessCode: queryValues.code,  // accessCode is undefined if not logged in
      isLoggedIn,
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
    const { accessCode, isLoggedIn, isLocked } = this.state;

    return (
      <div className='app'>
        <h1>Jūrne</h1>
        <p>
          Welcome ~ :) We are really happy to have you here.
          Learn more about our services and see other details
          on our website.
        </p>
        <div className='greeting'>
          {isLoggedIn
            ? 'Logged in! Choose an action below.'
            : 'Press the button below to log in.'
          }
        </div>
        {isLoggedIn
        ?
          <div>
            <div
              className='button'
              onClick={this.handleClick}
            >
              {isLocked ? 'Unlock' : 'Lock'}
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
