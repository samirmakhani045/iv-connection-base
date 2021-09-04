import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ConnectionTypes from '../connection-types/ConnectionType';
import ConnectionInputs from '../connection-inputs/ConnectionInputs';
import ConnectionGroups from '../connection-groups/ConnectionGroups';

import { ConnectionText, StepWrapper, StepBody } from './Stepper.styles';

import Step from './Step';

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepError, setStepError] = useState(false);
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
    setStepError(currentStep - 1 === 0);
  };

  const nextStep = (newValues) => {
    setFormValues({ ...formValues, ...newValues });
    setCurrentStep(currentStep + 1);
  };

  const setError = (err) => {
    setStepError(err);
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
            setStepError={setError}
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
      <ConnectionText>Create new connection</ConnectionText>
      <StepWrapper>
        {steps.map((item, index) => (
          <Step
            key={index}
            index={index}
            label={item}
            completed={currentStep > index + 1}
            selected={currentStep === index + 1}
            stepError={index === 1 && stepError}
          />
        ))}
      </StepWrapper>
      <StepBody>{getStepContent(currentStep)}</StepBody>
    </>
  );
};

Stepper.propTypes = {
  // Array of setps heading
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Stepper;
