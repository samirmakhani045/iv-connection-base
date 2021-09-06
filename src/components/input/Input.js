import React from 'react';
import PropTypes from 'prop-types';

import { isIconValid } from '@utils/stories/getAllIcons';

import { Wrapper, StyledInput, Label, Span, StyledIcon, Error } from './Input.styles';

const Input = (props) => {
  const {
    onChange,
    disabled,
    id,
    label,
    type,
    name,
    value,
    icon,
    error,
    required,
    maxLength,
    isNumber,
    ...remainingProps
  } = props;

  const onKeyDown = (evt) => {
    const charCode = evt.which ? evt.which : evt.keyCode;
    if (isNumber && charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.preventDefault();
    }
    return true;
  };

  return (
    <Wrapper data-testid="wrapper">
      <Label id={`${id}-label`} htmlFor={id}>
        <StyledInput
          data-testid="input"
          id={id}
          name={name}
          onKeyDown={(e) => onKeyDown(e)}
          type={type}
          disabled={disabled}
          required={required}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
          withError={!!error}
          withIcon={!!isIconValid(icon)}
          aria-invalid={!!error}
          aria-required={required}
          {...(label && { 'aria-labelledby': `${id}-label` })}
          {...(error && { 'aria-describedby': `${id}-error` })}
          {...remainingProps}
        />
        {label && (
          <Span
            data-testid="inputLabel"
            withError={!!error}
            withIcon={!!isIconValid(icon)}
            withValue={!!value}
          >
            {label}
          </Span>
        )}
        <StyledIcon data-testid="inputIcon" name={icon} size={12} withError={!!error} />
      </Label>
      {error && (
        <Error data-testid="inputError" id={`${id}-error`}>
          {error}
        </Error>
      )}
    </Wrapper>
  );
};

Input.propTypes = {
  /** Disables the input */
  disabled: PropTypes.bool,
  /** IDD of the input that is used on forms */
  id: PropTypes.string.isRequired,
  /** Label to describe the input */
  label: PropTypes.string.isRequired,
  /** Type of input control */
  type: PropTypes.oneOf(['text', 'number']),
  /** Name of the input that is used on forms */
  name: PropTypes.string,
  /** Value to fill the input */
  value: PropTypes.string,
  /** If set, icon that will be placed on the right side of the input */
  icon: PropTypes.string,
  /** Validation error */
  error: PropTypes.string,
  /** Set input as required */
  required: PropTypes.bool,
  // Callback function
  onChange: PropTypes.func.isRequired,
  // max length of number
  maxLength: PropTypes.string.isRequired,
  // is number
  isNumber: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  value: '',
};

export default Input;
