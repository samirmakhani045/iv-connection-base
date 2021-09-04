import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Pad = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4C7.9 4 7 4.9 7 6ZM15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4ZM23 12C23 10.9 22.1 10 21 10C19.9 10 19 10.9 19 12C19 13.1 19.9 14 21 14C22.1 14 23 13.1 23 12ZM5 18C5 16.9 4.1 16 3 16C1.9 16 1 16.9 1 18C1 19.1 1.9 20 3 20C4.1 20 5 19.1 5 18ZM0.999999 6C0.999999 7.1 1.9 8 3 8C4.1 8 5 7.1 5 6C5 4.9 4.1 4 3 4C1.9 4 0.999999 4.9 0.999999 6ZM17 18C17 16.9 16.1 16 15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18ZM11 18C11 16.9 10.1 16 9 16C7.9 16 7 16.9 7 18C7 19.1 7.9 20 9 20C10.1 20 11 19.1 11 18ZM17 12C17 10.9 16.1 10 15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12ZM11 12C11 10.9 10.1 10 9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12ZM5 12C5 10.9 4.1 10 3 10C1.9 10 1 10.9 1 12C1 13.1 1.9 14 3 14C4.1 14 5 13.1 5 12Z" />
    </svg>
  );
};

Pad.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Pad.defaultProps = {
  fill: colors.textPrimary,
};

export default Pad;
