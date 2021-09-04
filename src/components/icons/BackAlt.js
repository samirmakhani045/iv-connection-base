import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const BackAlt = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M7.99 13L20 13L20 11L7.99 11L7.99 8L4 12L7.99 16L7.99 13Z" />
    </svg>
  );
};

BackAlt.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

BackAlt.defaultProps = {
  fill: colors.textPrimary,
};

export default BackAlt;
