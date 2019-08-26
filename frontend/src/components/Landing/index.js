import React, { Component } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import AuthUserContext from '../Session/context';
import { withFirebase } from '../Firebase';
import { SignInButton } from '../SignIn';
import { SignUpButton } from '../SignUp';
import * as ROUTES from '../../constants/routes';

class Landing extends Component {
  componentDidMount() {
    this.listener = this.props.firebase.onAuthUserListener(
      authUser => !!authUser && this.props.history.push(ROUTES.DRIVE)
    )
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => !!authUser ?
          <div>
            <h1>Jūrne</h1>
            <p>
              Welcome! We are happy to see you here. Learn more about
              our product on our website!
            </p>
            <br />
            <p>
              Please log into your account below or sign up if you don't
              have an account!
            </p>

            <SignInButton />
            <SignUpButton />
          </div>
        : null}
      </AuthUserContext.Consumer>
    );
  }
}

export default compose(
  withRouter,
  withFirebase
)(Landing);