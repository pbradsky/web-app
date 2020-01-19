import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const BACK = -1;
const FORWARD = 1;

const ContractNav = ({ onChangeStage, progress }) => {
  const onFirstPage = progress === 0;
  const onLastPage = progress === 1;

  return (
    <>
      <Button
        disabled={onFirstPage}
        onClick={onChangeStage(BACK)}>
          Back
      </Button>
      <Button
        form='form-stage'
        type='submit'
        className='float-right'>
          {onLastPage ? 'Submit' : 'Next'}
      </Button>
    </>
  );
};

class MultiStageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: this.props.forms,
      stage: 0,
      validated: false,
    };
  }

  onChangeForm = event => {
    const { forms, stage } = this.state;
    forms[stage].state[event.target.name] = event.target.value;
    this.setState({ forms });
  }

  onChangeStage = delta => event => {
    const { forms, stage } = this.state;
    event.preventDefault();

    if (delta === FORWARD) {
      const form = event.target;
      if (form.checkValidity() === false) {
        this.setState({ validated: true });
        return;
      }
    }

    let newStage = stage + delta;
    if (newStage < 0) {
      newStage = 0;
    } else if (newStage >= forms.length) {
      // Submitted final stage
      const formData = this.props.onSubmit(forms);
      this.onFinalSubmit(formData);
      return;
    }

    this.setState({
      stage: newStage,
      validated: false
    });
  }

  onFinalSubmit = formData => {
    const { dbData, redirectRoute } = formData;

    console.log(dbData);

    this.props.history.push(redirectRoute);
  }

  render() {
    const { forms, stage, validated } = this.state;
    const { Header } = this.props;
    const progressRaw = stage / (forms.length - 1);
    const progressPercent = (stage + 1) / forms.length * 100;
    const StageForm = forms[stage].Component;

    return (
      <Container>
        <Card className='mt-4 mb-4'>
          <Card.Header >
            <Header />
            <br />
            <ProgressBar now={progressPercent} />
          </Card.Header>
          <Card.Body style={{whiteSpace: 'pre-line'}}>
            <StageForm
              state={forms[stage].state}
              validated={validated}
              onChangeForm={this.onChangeForm}
              onSubmit={this.onChangeStage(FORWARD)}
              />
          </Card.Body>
          <Card.Footer>
            <ContractNav
              onChangeStage={this.onChangeStage}
              progress={progressRaw} />
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

export default withRouter(MultiStageForm);