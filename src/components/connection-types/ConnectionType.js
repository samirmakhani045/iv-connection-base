import React from 'react';
import PropTypes from 'prop-types';

import { mapCommonStates } from '@utils/store';
import { connectors } from '@studio/stories/dashboard/connector.mock';

import { TypeBody, Type, TypeImage, TypeSpan } from './ConnectionType.styles';

const ConnectionTypes = ({ nextStep }) => {
  const selectType = (value) => {
    nextStep({ connectionType: value });
  };

  return (
    <TypeBody>
      {connectors.map((connect, i) => (
        <Type onClick={() => selectType(connect.type)} aria-hidden="true" key={i}>
          <TypeImage src={`images/${connect.iconPath}`} alt="snowflake" />
          <TypeSpan>{connect.title}</TypeSpan>
          <TypeImage close={true} src="images/close-arrow-bg.png" alt="close" />
        </Type>
      ))}
    </TypeBody>
  );
};

ConnectionTypes.propTypes = {
  // Make forward step while selecting the source
  nextStep: PropTypes.func.isRequired,
};

export default mapCommonStates(ConnectionTypes);
