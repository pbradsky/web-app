import React, { Component } from 'react';
import { compose } from 'recompose';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import FormGroup from 'components/Registration/Contract/Util/FormGroup';

import { withFirebase } from 'api/Firebase';
import { withUser } from 'api/Session';

class AddVehicleModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      vin: '',
      license: '',
      year: '',
      make: '',
      model: '',
      color: '',
      validated: false,
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      validated: true
    });
  }

  setShow = show => () => {
    this.setState({ show });
  }

  render() {
    const { show, vin, license, year, make, model, color, validated } = this.state;

    return (
      <>
        <Button
          variant='light'
          style={{color: '#0077f6', outline: 'none', float: 'right', textAlign: 'center'}}
          onClick={this.setShow(true)}>
        +
        </Button>

        <Modal
          size='lg'
          show={show}
          onHide={this.setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Add a Car
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Vehicle Information</h4>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Row>
                <FormGroup
                  className='col-12 col-md-6'
                  required
                  label='VIN'
                  name='vin'
                  value={vin}
                  onChange={this.onChange}
                  placeholder='VIN'
                  validated={validated}
                />
                <FormGroup
                  className='col-12 col-md-6'
                  required
                  label='License Plate Number:'
                  name='license'
                  value={license}
                  onChange={this.onChange}
                  placeholder='Vehicle License Plate'
                  validated={validated}
                />
              </Form.Row>
              <Form.Row>
                <FormGroup
                  className='col-6 col-lg-3'
                  required
                  label='Year:'
                  name='year'
                  value={year}
                  onChange={this.onChange}
                  placeholder='Vehicle Year'
                  validated={validated}
                />
                <FormGroup
                  className='col-6 col-lg-3'
                  required
                  label='Make:'
                  name='make'
                  value={make}
                  onChange={this.onChange}
                  placeholder='Vehicle Make'
                  validated={validated}
                />
                <FormGroup
                  className='col-6 col-lg-3'
                  required
                  label='Model:'
                  name='model'
                  value={model}
                  onChange={this.onChange}
                  placeholder='Vehicle Model'
                  validated={validated}
                />
                <FormGroup
                  className='col-6 col-lg-3'
                  required
                  label='Color:'
                  name='color'
                  value={color}
                  onChange={this.onChange}
                  placeholder='Vehicle Color'
                  validated={validated}
                />
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.setShow(false)}>
              Close
            </Button>
            <Button variant='primary' onClick={this.onSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default compose(
  withUser,
  withFirebase
)(AddVehicleModal);