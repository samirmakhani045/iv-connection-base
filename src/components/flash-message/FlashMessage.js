import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from '@studio/hooks/useTranslation';

import { Wrapper, StyledButton } from './FlashMessage.styles';

const FlashMessage = (props) => {
  const { variant, label, withAction, button, ...remainingProps } = props;
  const { label: buttonLabel, onClick, ...remainingButtonProps } = button || {};
  const { t } = useTranslation('components.flashMessage');

  return (
    <Wrapper data-testid="wrapper" variant={variant} withAction={withAction} {...remainingProps}>
      <span data-testid="label">{label}</span>
      {withAction && (
        <StyledButton
          data-testid="button"
          onClick={onClick}
          label={buttonLabel || t('button')}
          variant="light"
          small
          {...remainingButtonProps}
        />
      )}
    </Wrapper>
  );
};

FlashMessage.propTypes = {
  /** Which theme to apply to the flash message */
  variant: PropTypes.oneOf(['default', 'positive', 'alert']),
  /** Text that is visible and readable on the button. Mandatory if no icon */
  label: PropTypes.string.isRequired,
  /** Display a cta button */
  withAction: PropTypes.bool,
  /** Props to pass down to button */
  button: PropTypes.shape({
    /** Text that is visible and readable on the button */
    label: PropTypes.string,
    /** Callback to be fired when button is pressed */
    onClick: PropTypes.func,
    /** Label to describe the button. Useful when button has no text */
    'aria-label': PropTypes.string,
    /** Indicates whether or not this button has a popup */
    'aria-haspopup': PropTypes.string,
  }),
};

FlashMessage.defaultProps = {
  variant: 'default',
  withAction: false,
};

export default FlashMessage;
