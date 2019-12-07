import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Footer from '../Footer';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import ContractPage from '../Contract';
import HoldingPage from '../Holding';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import TermsPage from '../Terms';
import PrivacyPage from '../Privacy';
import ContactPage from '../Contact';

import { withAuthentication } from '../Session';
import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div style={{backgroundColor: '#f9f9f9'}}>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.CONTRACT} component={ContractPage} />
      <Route path={ROUTES.HOLDING} component={HoldingPage} />
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
