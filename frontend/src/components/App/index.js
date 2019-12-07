import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from 'components/Navigation/Navbar';
import Footer from 'components/Navigation/Footer';
import LandingPage from 'components/Landing';
import SignUpPage from 'components/Registration/SignUp';
import SignInPage from 'components/User/SignIn';
import PasswordForgetPage from 'components/User/PasswordForget';
import ContractPage from 'components/Registration/Contract';
import ConfirmationPage from 'components/Registration/Confirmation';
import AccountPage from 'components/User/Account';
import AdminPage from 'components/User/Admin';
import TermsPage from 'components/Legal/Terms';
import PrivacyPage from 'components/Legal/Privacy';
import ContactPage from 'components/Legal/Contact';

import { withAuthentication } from 'api/Session';
import * as ROUTES from 'constants/routes';

const App = () => (
  <Router>
    <div style={{backgroundColor: '#f9f9f9'}}>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.CONTRACT} component={ContractPage} />
      <Route path={ROUTES.CONFIRMATION} component={ConfirmationPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.TERMS} component={TermsPage} />
      <Route path={ROUTES.PRIVACY} component={PrivacyPage} />
      <Route path={ROUTES.CONTACT} component={ContactPage} />

      <Footer />
    </div>
  </Router>
);

export default withAuthentication(App);
