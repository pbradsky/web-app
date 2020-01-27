import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from 'components/Navigation/Navbar';
import Footer from 'components/Navigation/Footer';
import { BlankLoading } from 'components/Util/Loading';

import Content from 'styled/Content';

import { withAuthentication } from 'api/Session';
import * as ROUTES from 'constants/routes';

// Lazy page loading and chunking
const AdminPage = lazy(() => import('components/User/Roles/Admin'));
const AccountPage = lazy(() => import('components/User/Account'));
const ChooseDealerPage = lazy(() => import('components/Registration/ChooseDealer'));
const ConfirmationPage = lazy(() => import('components/Registration/Confirmation'));
const ContactPage = lazy(() => import('components/Legal/Contact'));
const DealerPage = lazy(() => import('components/User/Roles/Dealer'));
const LandingPage = lazy(() => import('components/Landing'));
const LoanerFormPage = lazy(() => import('components/Registration/Contract/LoanerForm'));
const LoanerFleetPage = lazy(() => import('components/User/Roles/Service/LoanerFleet'));
const MyContractPage = lazy(() => import ('components/User/Roles/User/MyContract'));
const NotFound = lazy(() => import('components/NotFound'));
const PasswordForgetPage = lazy(() => import('components/User/Account/PasswordForget'));
const PrivacyPage = lazy(() => import('components/Legal/Privacy'));
const ServicePage = lazy(() => import('components/User/Roles/Service/Dashboard'));
const SignInPage = lazy(() => import('components/User/Account/SignIn'));
const SignUpPage = lazy(() => import('components/Registration/SignUp'));
const TermsPage = lazy(() => import('components/Legal/Terms'));
const TestDriveFormPage = lazy(() => import('components/Registration/Contract/TestDriveForm'));
const UserDetailsFormPage = lazy(() => import('components/Registration/Contract/UserDetailsForm'));
const UserDetailsPage = lazy(() => import('components/User/UserDetails'));

const App = () => (
  <Router>
    <Navigation />
    <Content>
      <Suspense fallback={<BlankLoading />}>
        <Switch>
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.CHOOSE_DEALER} component={ChooseDealerPage} />
          <Route path={ROUTES.CONFIRMATION} component={ConfirmationPage} />
          <Route path={ROUTES.CONTACT} component={ContactPage} />
          <Route exact path={ROUTES.CONTRACT} component={UserDetailsFormPage} />
          {/* <Route exact path={ROUTES.CONTRACT_ONESHOT} component={UserDetailsFormPage} /> */}
          <Route path={ROUTES.DEALER} component={DealerPage} />
          <Route path={ROUTES.TEST_DRIVE_CONTRACT} component={TestDriveFormPage} />
          <Route path={ROUTES.LOANER_CONTRACT} component={LoanerFormPage} />
          <Route path={ROUTES.LOANER_FLEET} component={LoanerFleetPage} />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.MY_CONTRACT} component={MyContractPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.PRIVACY} component={PrivacyPage} />
          <Route path={ROUTES.SERVICE} component={ServicePage} />
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
