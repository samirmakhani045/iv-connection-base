import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Calendar = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 5V8H4V5H20ZM4 21V10H20V21H4Z" />
      <path opacity="0.3" d="M4 5.01H20V8H4V5.01Z" />
    </svg>
  );
};

Calendar.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Calendar.defaultProps = {
  fill: colors.textPrimary,
};

export default Calendar;
