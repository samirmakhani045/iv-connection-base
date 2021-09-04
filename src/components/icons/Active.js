import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Active = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
};

Active.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Active.defaultProps = {
  fill: colors.textPrimary,
};

export default Active;
