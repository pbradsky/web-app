import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLocked: true
    };
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
        >
          {isLocked ? 'Unlock' : 'Lock'}
        </div>
      </div>
    );
  }

}

export default App;
