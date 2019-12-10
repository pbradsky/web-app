import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import AuthUserContext from './context';
import { withFirebase } from 'api/Firebase';
import * as ROUTES from 'constants/routes';

const withAuthorization = (condition, redirect) => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      const redirectRoute = redirect || ROUTES.SIGN_IN;
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          if (!condition(authUser)) {
            this.props.history.push(redirectRoute);
          }
        },
        () => this.props.history.push(redirectRoute)
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withRouter,
    withFirebase,
  )(WithAuthorization);
};

export default withAuthorization;