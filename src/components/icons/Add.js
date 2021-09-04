import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Add = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
  );
};

Add.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Add.defaultProps = {
  fill: colors.textPrimary,
};

export default Add;
