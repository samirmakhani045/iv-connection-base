import React from 'react';
import PropTypes from 'prop-types';

import { mapCommonStates } from '@utils/store';
import { connectors } from '@studio/stories/dashboard/connector.mock';

const ConnectionTypes = ({ nextStep }) => {
  const selectType = (value) => {
    nextStep({ connectionType: value });
  };

  return (
    <div className="type-body">
      {connectors.map((connect, i) => (
        <div className="type" onClick={() => selectType(connect.type)} aria-hidden="true" key={i}>
          <img src={`images/${connect.iconPath}`} alt="snowflake" />
          <span>{connect.title}</span>
          <img className="close-icon" src="images/close-arrow-bg.png" alt="close" />
        </div>
      ))}
    </div>
  );
};

ConnectionTypes.propTypes = {
  // Make forward step while selecting the source
  nextStep: PropTypes.func.isRequired,
};

export default mapCommonStates(ConnectionTypes);
