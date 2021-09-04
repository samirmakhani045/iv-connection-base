import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Comment = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2ZM20 17.17L18.83 16H4V4H20V17.17Z" />
      <path opacity="0.3" d="M4 4V16H18.83L20 17.17V4H4Z" />
    </svg>
  );
};

Comment.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Comment.defaultProps = {
  fill: colors.textPrimary,
};

export default Comment;
