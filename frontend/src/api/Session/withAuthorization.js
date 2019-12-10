import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import withUser from './withUser';
import { withFirebase } from 'api/Firebase';
import * as ROUTES from 'constants/routes';

const withAuthorization = (condition, redirect) => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.checkRedirect();
    }

    componentDidUpdate() {
      this.checkRedirect();
    }

    checkRedirect = () => {
      const redirectRoute = redirect || ROUTES.SIGN_IN;
      if (this.props.authUser) {
        if (!condition(this.props.authUser)) {
          this.props.history.push(redirectRoute);
        }
      } else {
        this.props.history.push(redirectRoute)
      }
    }

    render() {
      return (
        condition(this.props.authUser)
          ? <Component {...this.props} />
          : null
      );
    }
  }

  return compose(
    withUser,
    withRouter,
    withFirebase,
  )(WithAuthorization);
};

export default withAuthorization;