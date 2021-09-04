import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Node = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill={fill} {...remainingProps}>
      <g transform="translate(2.000000, 6.000000)">
        <polygon points="4 2.66668 4 1.33334 7.66667 1.33334 7.66667 2.66668" />
        <path d="M9.3334,2.66667 C9.7016,2.66667 10,2.36819 10,2 C10,1.63181 9.7016,1.33333 9.3334,1.33333 C8.9652,1.33333 8.6667,1.63181 8.6667,2 C8.6667,2.36819 8.9652,2.66667 9.3334,2.66667 Z M9.3334,4 C10.4379,4 11.3334,3.10457 11.3334,2 C11.3334,0.89543 10.4379,0 9.3334,0 C8.2288,0 7.33337,0.89543 7.33337,2 C7.33337,3.10457 8.2288,4 9.3334,4 Z" />
        <path d="M2.66669,2.66667 C3.03488,2.66667 3.33335,2.36819 3.33335,2 C3.33335,1.63181 3.03488,1.33333 2.66669,1.33333 C2.2985,1.33333 2.00002,1.63181 2.00002,2 C2.00002,2.36819 2.2985,2.66667 2.66669,2.66667 Z M2.66669,4 C3.77126,4 4.66669,3.10457 4.66669,2 C4.66669,0.89543 3.77126,0 2.66669,0 C1.56212,0 0.66669,0.89543 0.66669,2 C0.66669,3.10457 1.56212,4 2.66669,4 Z" />
      </g>
    </svg>
  );
};

Node.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Node.defaultProps = {
  fill: colors.textPrimary,
};

export default Node;
