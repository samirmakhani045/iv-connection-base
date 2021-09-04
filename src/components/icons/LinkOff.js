import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const LinkOff = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M14.39 11L16 12.61V11H14.39ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.27 19.33 14.37 18.23 14.84L19.63 16.24C21.05 15.36 22 13.79 22 12C22 9.24 19.76 7 17 7ZM2 4.27L5.11 7.38C3.29 8.12 2 9.91 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12C3.9 10.41 5.11 9.1 6.66 8.93L8.73 11H8V13H10.73L13 15.27V17H14.73L18.74 21.01L20.15 19.6L3.41 2.86L2 4.27Z" />
    </svg>
  );
};

LinkOff.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

LinkOff.defaultProps = {
  fill: colors.textPrimary,
};

export default LinkOff;
