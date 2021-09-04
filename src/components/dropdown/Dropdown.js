import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { useTranslation } from '@studio/hooks/useTranslation';

import {
  DropdownIndicatorsContainer,
  DropdownOption,
  DropdownValueContainer,
} from './dropdown-components';
import { Wrapper, customStyles } from './Dropdown.styles';

const Dropdown = (props) => {
  const {
    disabled,
    multiselect,
    withIcon,
    withError,
    placeholder,
    onChange,
    options,
    ...remainingProps
  } = props;
  const [selectedOption, setSelectedOption] = useState([]);
  const selectRef = useRef();
  const { t } = useTranslation('common.forms.dropdown');

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onChange?.(selectedOption);

    if (multiselect) {
      // timeout required to shift focus from last selected option to input, otherwise click outside does not work
      setTimeout(() => selectRef?.current?.select?.focus(), 100);
    }
  };

  const renderDropdownIndicatorsContainer = (indicatorsContainerProps) => {
    return <DropdownIndicatorsContainer {...indicatorsContainerProps} />;
  };

  const renderDropdownOption = (optionProps) => {
    return <DropdownOption withIcon={withIcon} {...optionProps} />;
  };

  const renderDropdownValueContainer = (valueContainerProps) => {
    return <DropdownValueContainer withIcon={withIcon} {...valueContainerProps} />;
  };

  return (
    <Wrapper
      data-testid="dropdown"
      disabled={disabled}
      isEmpty={!selectedOption?.length && !Object.keys(selectedOption).length}
      withError={withError}
      {...remainingProps}
    >
      <Select
        data-testid="dropdownSelect"
        ref={selectRef}
        isMulti={multiselect}
        isDisabled={disabled}
        isSearchable={false}
        hideSelectedOptions={false}
        closeMenuOnSelect={!multiselect}
        value={selectedOption}
        onChange={handleChange}
        options={options}
        components={{
          IndicatorsContainer: renderDropdownIndicatorsContainer,
          Option: renderDropdownOption,
          ValueContainer: renderDropdownValueContainer,
        }}
        styles={customStyles}
        placeholder={placeholder || t('placeholder')}
        {...remainingProps}
      />
    </Wrapper>
  );
};

Dropdown.propTypes = {
  /** Disables the dropdown */
  disabled: PropTypes.bool,
  /** Allow dropdown to multi select options */
  multiselect: PropTypes.bool,
  /** Render icon on the left side of the dropdown */
  withIcon: PropTypes.bool,
  /** Highlight dropdown border with error color */
  withError: PropTypes.bool,
  /** Text that prompts user to open dropdown */
  placeholder: PropTypes.string,
  /** Callback to be fired when dropdown value changes */
  onChange: PropTypes.func,
  /** Options to populate dropdown */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Value to be sent to server */
      value: PropTypes.string.isRequired,
      /** Text that is visible and readable on the dropdown */
      label: PropTypes.string.isRequired,
      /** Icon to be placed on the left side of the dropdown */
      icon: PropTypes.string,
      /** Text to be placed on the right side of the label */
      pill: PropTypes.string,
    }),
  ),
};

Dropdown.defaultProps = {
  disabled: false,
  multiselect: false,
  withIcon: false,
  withError: false,
  options: [],
};

export default Dropdown;
