import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Lock = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path
        opacity="0.3"
        d="M6 20H18V10H6V20ZM12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13Z"
      />
      <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" />
    </svg>
  );
};

Lock.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Lock.defaultProps = {
  fill: colors.textPrimary,
};

export default Lock;
