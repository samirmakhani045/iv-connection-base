import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Notification = (props) => {
  const { fill, isOn, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path opacity="0.3" d="M12 6.5C9.51 6.5 8 8.52 8 11V17H16V11C16 8.52 14.49 6.5 12 6.5Z" />
      <path d="M18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z" />
      {isOn && (
        <>
          <path
            d="M19 8C19 9.65685 17.6569 11 16 11C14.3431 11 13 9.65685 13 8C13 6.34315 14.3431 5 16 5C17.6569 5 19 6.34315 19 8Z"
            fill={colors.error}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10ZM16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5C14.3431 5 13 6.34315 13 8C13 9.65685 14.3431 11 16 11Z"
            fill={colors.white}
          />
        </>
      )}
    </svg>
  );
};

Notification.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
  /** Display notification badge */
  isOn: PropTypes.bool,
};

Notification.defaultProps = {
  fill: colors.textPrimary,
  isOn: false,
};

export default Notification;
