import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Replace = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5V1L7 6Z" />
    </svg>
  );
};

Replace.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Replace.defaultProps = {
  fill: colors.textPrimary,
};

export default Replace;
