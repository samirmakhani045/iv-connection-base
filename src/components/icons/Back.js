import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Back = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" />
    </svg>
  );
};

Back.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Back.defaultProps = {
  fill: colors.textPrimary,
};

export default Back;
