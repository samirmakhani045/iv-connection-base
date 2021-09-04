import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const NextAlt = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" />
    </svg>
  );
};

NextAlt.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

NextAlt.defaultProps = {
  fill: colors.textPrimary,
};

export default NextAlt;
