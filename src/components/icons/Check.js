import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Check = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" />
    </svg>
  );
};

Check.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Check.defaultProps = {
  color: colors.textPrimary,
};

export default Check;
