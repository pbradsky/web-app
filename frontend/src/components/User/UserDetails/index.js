import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import PrintContractButton from 'components/Registration/Contract/Util/print';
import Image from 'react-bootstrap/Image'
import { WithPageLoad } from 'components/Util/Loading';
import { getImages } from 'utils/images';

import { withAuthorization } from 'api/Session';
import * as CONDITIONS from 'constants/conditions';
import * as ROLES from 'constants/roles';
import * as ROUTES from 'constants/routes';

class UserDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      user: null,
      proofOfInsurance: null,
      driversLicenseFront: null,
      driversLicenseBack: null,
      errors: null
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.user(this.props.match.params.id)
      .once('value')
      .then(snapshot => {
        const user = snapshot.val();
        this.setState({
          user: user
        });
      });

    // Load imgs if dealer
    if (CONDITIONS.isSignedInDealer(this.props.authUser)) {
      getImages(this.props.firebase.storage.ref(), this.props.match.params.id).then(values => {
        this.setState({
          proofOfInsurance: values.proofOfInsurance,
          driversLicenseBack: values.driversLicenseBack,
          driversLicenseFront: values.driversLicenseFront,
          errors: values.errors,
          loading: false
        });
      });
    } else {
      this.setState({
        loading: false
      });
    }

  }

  onToggleRole = role => () => {
    const { user } = this.state;

    const roles = {
      ...user.roles,
    };

    if (roles[role]) {
      delete roles[role];
    } else {
      roles[role] = role;
    }

    user.roles = roles;
    this.props.firebase
      .user(user.uid)
      .set({
        ...user,
        roles,
      })
      .then(() => {
        console.log(`Updated role '${role}' for user '${user.uid}'!`);
        this.setState({ user });
      })
      .catch(error => console.log(error));
  }

  adminView = () => {
    const { user, loading } = this.state;
    return (
      <Container>
        <WithPageLoad loading={loading}>
          {user &&
            <>
              <Jumbotron>
                <h1>User Details</h1>
                {user.email}
              </Jumbotron>
              <Card>
                <Card.Body>
                  <Card.Title>{user.username}</Card.Title>
                  <hr />
                  <Card.Text>
                    Admin Permissions: {CONDITIONS.isSignedInAdmin(user) ? 'Yes' : 'No'}
                  </Card.Text>
                  <Button className='mb-2' onClick={this.onToggleRole(ROLES.ADMIN)}>
                    Toggle Admin
                  </Button>
                  <hr />
                  <Card.Text>
                    Dealer Permissions: {CONDITIONS.isSignedInDealer(user) ? 'Yes' : 'No'}
                  </Card.Text>
                  <Button className='mb-2' onClick={this.onToggleRole(ROLES.DEALER)}>
                    Toggle Dealer
                    {/* TODO(tim): attach dealer to an active dealership */}
                  </Button>
                  <hr />
                  <Card.Text>
                    Service Permissions: {CONDITIONS.isSignedInService(user) ? 'Yes' : 'No'}
                  </Card.Text>
                  <Button className='mb-2' onClick={this.onToggleRole(ROLES.SERVICE)}>
                    Toggle Service
                    {/* TODO(tim): attach service to an active dealership */}
                  </Button>
                  <hr />
                  <PrintContractButton user={user} storage={this.props.firebase.storage.ref()} />
                </Card.Body>
              </Card>
            </>}
        </WithPageLoad>
      </Container>
    );
  }

  dealerView = () => {
    const { user, loading, proofOfInsurance, driversLicenseBack, driversLicenseFront, errors } = this.state;
    return (
      <Container>
        <WithPageLoad loading={loading}>
          {user &&
            <>
              <Jumbotron>
                <h1>User Details</h1>
                {user.username}
              </Jumbotron>
              <Card>
              {proofOfInsurance &&
                <Card.Body>
                  <Card.Title>Proof of Insurance</Card.Title>
                  <Image src={proofOfInsurance} fluid />
                </Card.Body>
              }
              {driversLicenseBack &&
                <Card.Body>
                  <Card.Title>Driver's License (back)</Card.Title>
                  <Image src={driversLicenseBack} fluid />
                </Card.Body>
              }
              {driversLicenseFront &&
                <Card.Body>
                  <Card.Title>Driver's License (front)</Card.Title>
                  <Image src={driversLicenseFront} fluid />
                </Card.Body>
              }
              </Card>
              <br /><br />
              {errors && errors.map((error, index) => <p key={index}>{error}</p>)}
            </>}
        </WithPageLoad>
      </Container>
    );
  }

  render() {
    if (CONDITIONS.isSignedInAdmin(this.props.authUser))
      return this.adminView();
    return this.dealerView();
  }
}

const UserDetailsLink = ({ isAdmin, uid }) => (
  isAdmin
    ? <Link className='m-2' to={ROUTES.USER_DETAILS + `/${uid}`}>
        <Button size='sm'>Edit User</Button>
      </Link>
    : <Link className='m-2' to={ROUTES.USER_DETAILS + `/${uid}`}>
        <Button size='sm'>View Images</Button>
      </Link>
);

export { UserDetailsLink };
export default withAuthorization(CONDITIONS.isSignedInAdminOrDealer)(UserDetailsPage);