import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Expand = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M20 12L16 8V11H8V13H16V16L20 12Z" />
      <path d="M4 12L8 16L8 13L16 13L16 11L8 11L8 8L4 12Z" />
    </svg>
  );
};

Expand.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Expand.defaultProps = {
  fill: colors.textPrimary,
};

export default Expand;
