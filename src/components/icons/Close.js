import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Close = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
    </svg>
  );
};

Close.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Close.defaultProps = {
  color: colors.cloud4,
};

export default Close;
