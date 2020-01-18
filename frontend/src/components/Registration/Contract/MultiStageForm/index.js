import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ContractNav = ({ onChangeStage, progress }) => {
  const onFirstPage = progress === 0;
  const onLastPage = progress === 1;

  return (
    <>
      <Button
        disabled={onFirstPage}
        onClick={onChangeStage(-1)}>
          Back
      </Button>
      <Button
        className='float-right'
        onClick={onChangeStage(1)}>
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

    let newStage = stage + delta;
    if (newStage < 0) {
      newStage = 0;
    } else if (newStage >= forms.length) {
      this.props.onSubmit(forms);
      return;
    }

    this.setState({ stage: newStage });
  }

  render() {
    const { forms, stage } = this.state;
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
              onChangeForm={this.onChangeForm}
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

export default MultiStageForm;