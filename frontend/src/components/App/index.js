import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminPage from 'components/User/Admin';
import AccountPage from 'components/User/Account';
import ChooseDealerPage from 'components/Registration/ChooseDealer';
import ConfirmationPage from 'components/Registration/Confirmation';
import ContactPage from 'components/Legal/Contact';
import ContractPage from 'components/Registration/Contract';
import DealerPage from 'components/User/Dealer';
import Footer from 'components/Navigation/Footer';
import LandingPage from 'components/Landing';
import Navigation from 'components/Navigation/Navbar';
import PasswordForgetPage from 'components/User/PasswordForget';
import PrivacyPage from 'components/Legal/Privacy';
import SignInPage from 'components/User/SignIn';
import SignUpPage from 'components/Registration/SignUp';
import TermsPage from 'components/Legal/Terms';
import UserDetailsPage from 'components/User/UserDetails';

import { withAuthentication } from 'api/Session';
import * as ROUTES from 'constants/routes';

const App = () => (
  <Router>
    <div style={{backgroundColor: '#f9f9f9'}}>
      <Navigation />

      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.USER_DETAILS + '/:id'} component={UserDetailsPage} />
      <Route path={ROUTES.CHOOSE_DEALER} component={ChooseDealerPage} />
      <Route path={ROUTES.CONFIRMATION} component={ConfirmationPage} />
      <Route path={ROUTES.CONTACT} component={ContactPage} />
      <Route exact path={ROUTES.CONTRACT} component={ContractPage} />
      <Route exact path={ROUTES.CONTRACT_ONESHOT} component={ContractPage} />
      <Route path={ROUTES.DEALER} component={DealerPage} />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.PRIVACY} component={PrivacyPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.TERMS} component={TermsPage} />

      <Footer />
    </div>
  </Router>
);

export default withAuthentication(App);
