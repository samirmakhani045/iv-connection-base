import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ selected, completed, index, label, stepError }) => (
  <>
    <div className={`stepBlock ${selected ? 'selected' : ''} ${completed ? 'completed' : ''}`}>
      <span className="stepLabel">
        {index + 1}.{label}
      </span>
      <div className="circleWrapper">
        <div className={`circle ${stepError && selected ? 'stepperError' : ''}`} />
      </div>
    </div>
  </>
);

Step.propTypes = {
  selected: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  stepError: PropTypes.bool,
};

export default Step;
