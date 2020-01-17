import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

const One = () => <h1>Stage ONE</h1>;
const Two = () => <h1>Stage TWO</h1>;

const forms = [
  One, Two
];

const getInitialState = () => {
  return {
    forms: forms,
    stage: 0,
    maxStage: 0,
  };
};

const ContractNav = ({ onChangeStage, progress, canAdvance }) => {
  const onFirstPage = progress === 0;
  const onLastPage = progress === 1;

  return (
    <>
      <Button
        className='mr-2'
        disabled={onFirstPage}
        onClick={onChangeStage(-1)}>
          Back
      </Button>
      <Button
        className='ml-2'
        disabled={!canAdvance}
        onClick={onChangeStage(1)}>
          {onLastPage ? 'Submit' : 'Next'}
      </Button>
    </>
  );
};

class MultiStageForm extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  onChangeStage = delta => event => {
    const { forms, stage } = this.state;

    let newStage = stage + delta;
    if (newStage < 0) {
      newStage = 0;
    } else if (newStage >= forms.length) {
      console.log('submitted!');
    }

    this.setState({ stage: newStage });
    event.preventDefault();
  }

  render() {
    const { forms, stage, maxStage } = this.state;
    const progressRaw = stage / (forms.length - 1);
    const progressPercent = (stage + 1) / forms.length * 100;
    const StageForm = forms[stage];

    return (
      <Container>
        <Card className='mt-4 mb-4'>
          <Card.Header>
            <ProgressBar now={progressPercent} />
          </Card.Header>
          <Card.Body style={{whiteSpace: 'pre-line'}}>
            <StageForm />
          </Card.Body>
          <Card.Footer>
            <ContractNav
              onChangeStage={this.onChangeStage}
              progress={progressRaw}
              canAdvance={stage < maxStage} />
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

export default MultiStageForm;