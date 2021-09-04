import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Warning = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path
        opacity="0.3"
        d="M4.47 19H19.53L12 5.99L4.47 19ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z"
      />
      <path d="M1 21H23L12 2L1 21ZM4.47 19L12 5.99L19.53 19H4.47ZM11 16H13V18H11V16ZM11 10H13V14H11V10Z" />
    </svg>
  );
};

Warning.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Warning.defaultProps = {
  fill: colors.textPrimary,
};

export default Warning;
