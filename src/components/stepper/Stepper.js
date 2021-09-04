import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Stepper.scss';
import ConnectionTypes from '../connection-types/ConnectionType';
import ConnectionInputs from '../connection-inputs/ConnectionInputs';
import ConnectionGroups from '../connection-groups/ConnectionGroups';

import Step from './Step';
import { P, StepWrapper, StepBody } from './Stepper.styles';

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({
    connectionType: null,
    nickName: '',
    databaseName: '',
    warehouse: '',
    server: '',
    port: '',
    onlyMe: true,
    allUsers: false,
  });

  const previousStep = (newValues) => {
    setFormValues({ ...formValues, ...newValues });
    setCurrentStep(currentStep - 1);
  };

  const nextStep = (newValues) => {
    setFormValues({ ...formValues, ...newValues });
    setCurrentStep(currentStep + 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <ConnectionTypes
            {...formValues}
            activeStep={currentStep}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <ConnectionInputs
            {...formValues}
            activeStep={currentStep}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <ConnectionGroups
            {...formValues}
            activeStep={currentStep}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        );
      default:
        throw new Error('Mis-step!');
    }
  };

  return (
    <>
      <P>Create new connection</P>
      <StepWrapper>
        {steps.map((item, index) => (
          <Step
            key={index}
            index={index}
            label={item}
            completed={currentStep > index + 1}
            selected={currentStep === index + 1}
          />
        ))}
      </StepWrapper>
      <StepBody>{getStepContent(currentStep)}</StepBody>
    </>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Stepper;
