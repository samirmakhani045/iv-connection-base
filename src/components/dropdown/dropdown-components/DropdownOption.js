import React from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

import * as colors from '@studio/theme/colors';
import * as icons from '@studio/components/icons';

import {
  OptionWrapper,
  SelectIconWrapper,
  IconWrapper,
  NoIcon,
  Pill,
  Span,
} from './DropdownComponents.styles';

const DropdownOption = (props) => {
  const { data, isMulti, isSelected, withIcon, ...remainingProps } = props;
  const { value, label, icon, pill } = data;
  const { Option } = components;
  const Elem = icons[icon];
  const Check = icons['Check'];
  const Checked = icons['Checked'];
  const Unchecked = icons['Unchecked'];
  const fillColor = isSelected ? colors.textPrimary : colors.textSecondary;

  const renderSelectIcon = () => {
    if (isMulti) {
      return (
        <SelectIconWrapper>
          {isSelected ? <Checked fill={fillColor} /> : <Unchecked fill={fillColor} />}
        </SelectIconWrapper>
      );
    }

    if (isSelected) {
      return (
        <SelectIconWrapper>
          <Check fill={fillColor} />
        </SelectIconWrapper>
      );
    }
  };

  return (
    <Option
      data-testid="dropdownOption"
      data={data}
      isMulti={isMulti}
      isSelected={isSelected}
      value={value}
      {...remainingProps}
    >
      <OptionWrapper>
        {withIcon && (
          <IconWrapper data-testid="dropdownOptionIcon">{Elem ? <Elem /> : <NoIcon />}</IconWrapper>
        )}
        <Span>{label}</Span>
        {pill && <Pill data-testid="dropdownOptionPill">{pill}</Pill>}
      </OptionWrapper>
      {renderSelectIcon()}
    </Option>
  );
};

DropdownOption.propTypes = {
  /** Provided prop from react-select */
  data: PropTypes.shape({
    /** Value to be sent to server */
    value: PropTypes.string.isRequired,
    /** Text that is visible and readable on the dropdown */
    label: PropTypes.string.isRequired,
    /** Icon to be placed on the left side of the dropdown */
    icon: PropTypes.string,
    /** Text to be placed on the right side of the label */
    pill: PropTypes.string,
  }),
  /** Render option for multiselect dropdown */
  isMulti: PropTypes.bool,
  /** Is the current option selected */
  isSelected: PropTypes.bool,
  /** Render icon on the left side of the dropdown */
  withIcon: PropTypes.bool,
};

DropdownOption.defaultProps = {
  isMulti: false,
};

export default DropdownOption;
