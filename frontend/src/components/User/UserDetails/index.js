import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'styled/Container';
import PrintContractButton from 'components/Registration/Contract/print';
import Image from 'react-bootstrap/Image'
import { WithPageLoad } from 'components/Util/Loading';

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
    // load imgs if dealer
    if (!CONDITIONS.isSignedInAdmin(this.props.authUser)) {
      this.getImages();
    } else {
      this.setState({ 
        loading: false
      });
    }
    
  }

  getImages = () => {
    const errors = [];
    const storage = this.props.firebase.storage.ref();
    const proofOfInsuranceRef = storage.child(`images/${this.props.match.params.id}-proof_of_insurance`);
    const driversLicenseBackRef = storage.child(`images/${this.props.match.params.id}-drivers_license_back`);
    const driversLicenseFrontRef = storage.child(`images/${this.props.match.params.id}-drivers_license_front`);

    const promise0 = new Promise((resolve, reject) => {
      proofOfInsuranceRef.getDownloadURL().then(proofOfInsuranceURL => {
        this.setState({
          proofOfInsurance: proofOfInsuranceURL
        })
        resolve(proofOfInsuranceURL);
      }).catch(err => reject(err));
    }).catch(err => {
      switch (err.code) {
        case 'storage/object-not-found':
          errors.push('Proof of Insurance not found');
          break;
        default:
          errors.push('Error retrieving Proof of Insurance');
      }
      console.log(err);
    });

    const promise1 = new Promise((resolve, reject) => {
      driversLicenseBackRef.getDownloadURL().then(driversLicenseBackURL => {
        this.setState({
          driversLicenseBack: driversLicenseBackURL
        });
        resolve(driversLicenseBackURL);
      }).catch(err => reject(err));
    }).catch(err => {
      switch (err.code) {
        case 'storage/object-not-found':
          errors.push('Driver\'s License (back) not found');
          break;
        default:
          errors.push('Error retrieving Driver\'s License (back)');
      }
      console.log(err);
    });

    const promise2 = new Promise((resolve, reject) => {
      driversLicenseFrontRef.getDownloadURL().then(driversLicenseFrontURL => {
        this.setState({
          driversLicenseFront: driversLicenseFrontURL,
        });
        resolve(driversLicenseFrontURL);
      }).catch(err => reject(err));
    }).catch(err => {
      switch (err.code) {
        case 'storage/object-not-found':
          errors.push('Driver\'s License (front) not found');
          break;
        default:
          errors.push('Error retrieving Driver\'s License (front)');
      }
      console.log(err);
    });

    Promise.all([promise0, promise1, promise2]).then(values => {
      this.setState({
        loading: false,
        errors: errors
      });
    });
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
    this.setState({ user });
    this.props.firebase
      .user(user.uid)
      .set({
        ...user,
        roles,
      })
      .then(() => console.log(`Updated role '${role}'!`))
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
                  <Card.Text>Admin Permissions: {CONDITIONS.isSignedInAdmin(user) ? 'Yes' : 'No'}</Card.Text>
                  <Button className='mb-2' onClick={this.onToggleRole(ROLES.ADMIN)}>
                    Toggle Admin
                  </Button>
                  <hr />
                  <Card.Text>Dealer Permissions: {CONDITIONS.isSignedInDealer(user) ? 'Yes' : 'No'}</Card.Text>
                  <Button className='mb-2' onClick={this.onToggleRole(ROLES.DEALER)}>
                    Toggle Dealer
                  </Button>
                  <PrintContractButton user={user} />
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