import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import bgimage from 'assets/jumboImage.jpeg';

import styled from 'styled-components';
import AboutPage from 'components/About';

import * as ROUTES from 'constants/routes';

const BackdropImage = styled.div`
    background-image: url(${bgimage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

class Landing extends Component {
  constructor(props) {
     super(props)
     this.state = {
        field: 1,
     }
     //creates a reference for your element to use
     this.myDivToFocus = React.createRef()
  }

  handleOnClick = (event) => {
      //.current is verification that your element has rendered
      if(this.myDivToFocus.current){
          this.myDivToFocus.current.scrollIntoView({
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
        <AboutPage ref={this.myDivToFocus}/>
      </>
    )
  }
}

export default Landing;