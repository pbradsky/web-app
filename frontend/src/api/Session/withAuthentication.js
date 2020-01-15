import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from 'api/Firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
        loading: true,
      };
    }

    componentDidMount() {
      this.setState({ loading: true });

      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          this.setState({
            authUser,
            loading: false
          });
        },
        () => {
          this.setState({
            authUser: null,
            loading: false
          });
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;