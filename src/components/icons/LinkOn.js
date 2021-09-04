import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const LinkOn = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path
        opacity="0.87"
        d="M17 7H13V9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM11 15H7C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15ZM8 11H16V13H8V11Z"
      />
    </svg>
  );
};

LinkOn.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

LinkOn.defaultProps = {
  fill: colors.textPrimary,
};

export default LinkOn;
