import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from 'components/Navigation/Navbar';
import Footer from 'components/Navigation/Footer';
import { BlankLoading } from 'components/Util/Loading';

import Content from 'styled/Content';

import { withAuthentication } from 'api/Session';
import * as ROUTES from 'constants/routes';

// lazy page loading and chunking
const AboutPage = lazy(() => import('components/About'));
const AdminPage = lazy(() => import('components/User/Admin'));
const AccountPage = lazy(() => import('components/User/Account'));
const ChooseDealerPage = lazy(() => import('components/Registration/ChooseDealer'));
const ConfirmationPage = lazy(() => import('components/Registration/Confirmation'));
const ContactPage = lazy(() => import('components/Legal/Contact'));
const ContractPage = lazy(() => import('components/Registration/Contract'));
const DealerPage = lazy(() => import('components/User/Dealer'));
const LandingPage = lazy(() => import('components/Landing'));
const MyContractPage = lazy(() => import ('components/User/MyContract'));
const NotFound = lazy(() => import('components/NotFound'));
const PasswordForgetPage = lazy(() => import('components/User/PasswordForget'));
const PrivacyPage = lazy(() => import('components/Legal/Privacy'));
const SignInPage = lazy(() => import('components/User/SignIn'));
const SignUpPage = lazy(() => import('components/Registration/SignUp'));
const TermsPage = lazy(() => import('components/Legal/Terms'));
const UserDetailsPage = lazy(() => import('components/User/UserDetails'));

const App = () => (
  <Router>
    <Navigation />
    <Content>
      <Suspense fallback={<BlankLoading />}>
        <Switch>
          <Route path={ROUTES.ABOUT} component={AboutPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.CHOOSE_DEALER} component={ChooseDealerPage} />
          <Route path={ROUTES.CONFIRMATION} component={ConfirmationPage} />
          <Route path={ROUTES.CONTACT} component={ContactPage} />
          <Route exact path={ROUTES.CONTRACT} component={ContractPage} />
          <Route exact path={ROUTES.CONTRACT_ONESHOT} component={ContractPage} />
          <Route path={ROUTES.DEALER} component={DealerPage} />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.MY_CONTRACT} component={MyContractPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.PRIVACY} component={PrivacyPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.TERMS} component={TermsPage} />
          <Route exact path={ROUTES.USER_DETAILS + '/:id'} component={UserDetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Content>
    <Footer />
  </Router>
);

export default withAuthentication(App);
