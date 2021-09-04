import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Next = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M4 13L16.17 13L10.58 18.59L12 20L20 12L12 4L10.59 5.41L16.17 11L4 11L4 13Z" />
    </svg>
  );
};

Next.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Next.defaultProps = {
  fill: colors.textPrimary,
};

export default Next;
