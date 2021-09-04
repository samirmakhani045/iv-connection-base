import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Edit = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path opacity="0.3" d="M5 18.08V19H5.92L14.98 9.94L14.06 9.02L5 18.08Z" />
      <path d="M20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04ZM3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM5.92 19H5V18.08L14.06 9.02L14.98 9.94L5.92 19Z" />
    </svg>
  );
};

Edit.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Edit.defaultProps = {
  fill: colors.textPrimary,
};

export default Edit;
