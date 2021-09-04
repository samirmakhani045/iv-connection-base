import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Delete = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path opacity="0.3" d="M8 9H16V19H8V9Z" />
      <path d="M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9Z" />
    </svg>
  );
};

Delete.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Delete.defaultProps = {
  fill: colors.textPrimary,
};

export default Delete;
