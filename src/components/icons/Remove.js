import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Remove = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M19 13H5V11H19V13Z" />
    </svg>
  );
};

Remove.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Remove.defaultProps = {
  fill: colors.textPrimary,
};

export default Remove;
