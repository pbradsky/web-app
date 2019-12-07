import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AccountPage from 'components/User/Account';
import AdminPage from 'components/User/Admin';
import ApprovalPage from 'components/User/Approval';
import ConfirmationPage from 'components/Registration/Confirmation';
import ContactPage from 'components/Legal/Contact';
import ContractPage from 'components/Registration/Contract';
import DevPage from 'components/User/Dev';
import Footer from 'components/Navigation/Footer';
import LandingPage from 'components/Landing';
import Navigation from 'components/Navigation/Navbar';
import PasswordForgetPage from 'components/User/PasswordForget';
import PrivacyPage from 'components/Legal/Privacy';
import SignInPage from 'components/User/SignIn';
import SignUpPage from 'components/Registration/SignUp';
import TermsPage from 'components/Legal/Terms';

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
      <Route exact path={ROUTES.APPROVAL + '/:id'} component={ApprovalPage} />
      <Route path={ROUTES.DEV} component={DevPage} />
      <Route path={ROUTES.TERMS} component={TermsPage} />
      <Route path={ROUTES.PRIVACY} component={PrivacyPage} />
      <Route path={ROUTES.CONTACT} component={ContactPage} />

      <Footer />
    </div>
  </Router>
);

export default withAuthentication(App);
