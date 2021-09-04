import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Grid = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z" />
    </svg>
  );
};

Grid.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Grid.defaultProps = {
  fill: colors.textPrimary,
};

export default Grid;
