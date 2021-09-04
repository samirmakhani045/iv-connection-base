import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input, Label, Thumb } from './Toggle.styles';

const Toggle = (props) => {
  const { checked, disabled, name, id, value, onClick, ...remainingProps } = props;
  const isDisabled = disabled || !onClick;

  return (
    <Container data-testid="container" checked={checked} disabled={isDisabled}>
      <Label htmlFor={id} disabled={isDisabled}>
        <Input
          data-testid="toggle"
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={isDisabled}
          onClick={isDisabled ? undefined : (ev) => onClick(ev.target)}
          {...remainingProps}
        />
      </Label>
      <Thumb />
    </Container>
  );
};

Toggle.propTypes = {
  /** Determine if the toggle is on or off */
  checked: PropTypes.bool.isRequired,
  /** Disables the toggle */
  disabled: PropTypes.bool,
  /** Name of the toggle that is used on forms */
  name: PropTypes.string,
  /** Id of the toggle that is used on forms */
  id: PropTypes.string,
  /** Value of toggle */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  /** Callback to be fired when toggle is pressed */
  onClick: PropTypes.func,
};

Toggle.defaultProps = {
  checked: false,
  disabled: false,
};

export default Toggle;
