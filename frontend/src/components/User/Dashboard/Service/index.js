import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const ServicePage = () => {
  const addLoaner = () => {
    // TODO(tim): add form to get loaner vehicle information and add to db
    //     using a modal/popup?
    console.log('add loaner vehicle');
  }

  return (
    <Container>
      <Jumbotron>
        <h1>Service Partner Dashboard</h1>
        <p>This page is only accessible to our Dealership Service partners.</p>
      </Jumbotron>
      <div>
        Loaner Fleet
        {/* TODO(tim): add loaner fleet list component */}
      </div>
      <Button onClick={addLoaner}>New</Button>
    </Container>
  );
};

export default ServicePage;