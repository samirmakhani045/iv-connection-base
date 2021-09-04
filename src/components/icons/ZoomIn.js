import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const ZoomIn = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M17.3 5.3L14.41 8.17L15.83 9.59L18.7 6.7L21 9V3H15L17.3 5.3ZM9 3H3V9L5.3 6.7L8.17 9.59L9.59 8.17L6.7 5.3L9 3ZM8.17 14.41L5.3 17.3L3 15V21H9L6.7 18.7L9.59 15.83L8.17 14.41ZM15.83 14.41L14.41 15.83L17.3 18.7L15 21H21V15L18.7 17.3L15.83 14.41Z" />
    </svg>
  );
};

ZoomIn.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

ZoomIn.defaultProps = {
  fill: colors.textPrimary,
};

export default ZoomIn;
