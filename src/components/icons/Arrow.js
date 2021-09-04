import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Arrow = (props) => {
  const { direction, fill, ...remainingProps } = props;
  const rotate = {
    up: 'rotate(270)',
    down: 'rotate(90)',
    left: 'rotate(180)',
    right: 'rotate(0)',
  };

  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      transform={rotate[direction]}
      fill={fill}
      {...remainingProps}
    >
      <path d="M9.29492 16.885L13.8749 12.295L9.29492 7.70498L10.7049 6.29498L16.7049 12.295L10.7049 18.295L9.29492 16.885Z" />
    </svg>
  );
};

Arrow.propTypes = {
  /** Direction where arrow is pointing */
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Arrow.defaultProps = {
  direction: 'right',
  fill: colors.textPrimary,
};

export default Arrow;
