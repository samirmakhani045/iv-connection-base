import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Unchecked = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" />
    </svg>
  );
};

Unchecked.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Unchecked.defaultProps = {
  fill: colors.textPrimary,
};

export default Unchecked;
