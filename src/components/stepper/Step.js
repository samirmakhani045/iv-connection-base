import React from 'react';
import PropTypes from 'prop-types';

import { StepLabel, CircleWrapper, Circle, StepBlock } from './Stepper.styles';

const Step = ({ selected, completed, index, label, stepError }) => (
  <>
    <StepBlock>
      <StepLabel>
        {index + 1}.{label}
      </StepLabel>
      <CircleWrapper>
        <Circle stepperError={stepError && selected} completed={completed} selected={selected} />
      </CircleWrapper>
    </StepBlock>
  </>
);

Step.propTypes = {
  // When tab is selected
  selected: PropTypes.bool.isRequired,
  // When move forward from previous tab
  completed: PropTypes.bool.isRequired,
  // Tab label
  label: PropTypes.string.isRequired,
  // Tab index
  index: PropTypes.number.isRequired,
  // When there was a error in current tab
  stepError: PropTypes.bool,
};

export default Step;
