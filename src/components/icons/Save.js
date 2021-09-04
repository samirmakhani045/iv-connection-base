import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Save = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M19 12V19H5V12H3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V12H19ZM13 12.67L15.59 10.09L17 11.5L12 16.5L7 11.5L8.41 10.09L11 12.67V3H13V12.67Z" />
    </svg>
  );
};

Save.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Save.defaultProps = {
  fill: colors.textPrimary,
};

export default Save;
