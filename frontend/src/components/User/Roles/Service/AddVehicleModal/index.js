import React from 'react';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import FormGroup from '../../../../Registration/Contract/Util/FormGroup';

const AddVehicleModal = ( props, {onSubmit, onChangeForm, validated}) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='light' style={{color: '#0077f6', outline: 'none', float: 'right', textAlign: 'center'}} onClick={handleShow}>
      +
      </Button>

      <Modal
        size='lg'
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Add a Car
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Vehicle Information</h4>
          <Form id='form-stage' noValidate onSubmit={onSubmit}>
            <Form.Row>
              <FormGroup
                className='col-12 col-md-6'
                required
                label='VIN'
                name='vin'
                value=''
                onChange={onChangeForm}
                placeholder='VIN'
                validated={validated}
              />
              <FormGroup
                className='col-12 col-md-6'
                required
                label='License Plate Number:'
                name='plate'
                value=''
                onChange={onChangeForm}
                placeholder='Vehicle License Plate'
              />
            </Form.Row>
            <Form.Row>
              <FormGroup
                className='col-6 col-lg-3'
                required
                label='Year:'
                name='year'
                value=''
                onChange={onChangeForm}
                placeholder='Vehicle Year'
              />
              <FormGroup
                className='col-6 col-lg-3'
                required
                label='Make:'
                name='make'
                value=''
                onChange={onChangeForm}
                placeholder='Vehicle Make'
              />
              <FormGroup
                className='col-6 col-lg-3'
                required
                label='Model:'
                name='model'
                value=''
                onChange={onChangeForm}
                placeholder='Vehicle Model'
              />
              <FormGroup
                className='col-6 col-lg-3'
                required
                label='Color:'
                name='color'
                value=''
                onChange={onChangeForm}
                placeholder='Vehicle Color'
              />
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddVehicleModal;