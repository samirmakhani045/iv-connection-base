import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Activity = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" />
    </svg>
  );
};

Activity.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Activity.defaultProps = {
  fill: colors.textPrimary,
};

export default Activity;
