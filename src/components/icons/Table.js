import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Table = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path
        opacity="0.3"
        d="M5 5H20V8H5V5ZM17 10H20V19H17V10ZM10 10H15V19H10V10ZM5 10H8V19H5V10Z"
      />
      <path d="M20 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM8 19H5V10H8V19ZM15 19H10V10H15V19ZM20 19H17V10H20V19ZM20 8H5V5H20V8Z" />
    </svg>
  );
};

Table.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Table.defaultProps = {
  fill: colors.textPrimary,
};

export default Table;
