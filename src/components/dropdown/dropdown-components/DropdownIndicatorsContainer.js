import React from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

import * as colors from '@studio/theme/colors';
import { Arrow, Lock } from '@studio/components/icons';

const DropdownIndicatorsContainer = (props) => {
  const { isDisabled, hasValue, selectProps, ...remainingProps } = props;
  const { IndicatorsContainer } = components;
  const isMenuOpen = selectProps.menuIsOpen;
  const fillColor = isDisabled || !hasValue ? colors.textSecondary : colors.textPrimary;

  const renderIndicatorsContainerIcon = () => {
    if (isDisabled) {
      return <Lock data-testid="dropdownIndicatorsContainerDisabled" fill={fillColor} />;
    }

    return (
      <Arrow
        data-testid="dropdownIndicatorsContainerIcon"
        fill={fillColor}
        direction={isMenuOpen ? 'up' : 'down'}
      />
    );
  };

  return (
    <IndicatorsContainer
      data-testid="dropdownIndicatorsContainer"
      isDisabled={isDisabled}
      hasValue={hasValue}
      selectProps={selectProps}
      {...remainingProps}
    >
      {renderIndicatorsContainerIcon()}
    </IndicatorsContainer>
  );
};

DropdownIndicatorsContainer.propTypes = {
  /** Is the dropdown disabled */
  isDisabled: PropTypes.bool,
  /** Does the dropdown has a selected value */
  hasValue: PropTypes.bool,
  /** Provided props from react-select */
  selectProps: PropTypes.object,
};

DropdownIndicatorsContainer.defaultProps = {
  isMulti: false,
};

export default DropdownIndicatorsContainer;
