import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const AddRound = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path
        opacity="0.3"
        d="M12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
      />
      <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
    </svg>
  );
};

AddRound.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

AddRound.defaultProps = {
  fill: colors.textPrimary,
};

export default AddRound;
