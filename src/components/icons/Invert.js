import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Invert = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M6.99 11L3 15L6.99 19V16H14V14H6.99V11ZM21 9L17.01 5V8H10V10H17.01V13L21 9Z" />
    </svg>
  );
};

Invert.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Invert.defaultProps = {
  fill: colors.textPrimary,
};

export default Invert;
