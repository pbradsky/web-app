import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';

import bgimage from 'assets/jumboImage.jpeg';
import AboutPage from 'components/Landing/About';

import AddVehicleModal from 'components/User/Roles/Service/AddVehicleModal';

import * as ROUTES from 'constants/routes';

const BackdropImage = styled.div`
    background-image: url(${bgimage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    min-height: calc(100vh - 68px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

class Landing extends Component {
  constructor(props) {
     super(props);

     // Create a reference to about page
     this.aboutPage = React.createRef()
  }

  handleOnClick = () => {
      // Make sure about page rendered
      if (this.aboutPage.current) {
          this.aboutPage.current.scrollIntoView({
             behavior: "smooth",
             block: "nearest"
          })
      }
  }

  render() {
    return (
      <>
        <BackdropImage>
          <div className='mt-auto'>
            <h1 className='text-white'>Your Drive Starts Here</h1>
            <p className='text-white'>The easiest way to test-drive.</p>
            <Link to={ROUTES.SIGN_UP}>
              <Button size='lg'>
                Test Drive Today
              </Button>
            </Link>
          </div>
          <div className="mt-auto mb-4">
            <Button onClick={this.handleOnClick} variant='outline-secondary'>
              Learn More
            </Button>
          </div>
        </BackdropImage>
        <AboutPage ref={this.aboutPage}/>
      </>
    )
  }
}

export default Landing;