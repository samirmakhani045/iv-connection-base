import React from 'react';
import PropTypes from 'prop-types';

import * as colors from '@studio/theme/colors';

const Note = (props) => {
  const { fill, ...remainingProps } = props;

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill={fill} {...remainingProps}>
      <path d="M14 17H4V19H14V17ZM20 9H4V11H20V9ZM4 15H20V13H4V15ZM4 5V7H20V5H4Z" />
    </svg>
  );
};

Note.propTypes = {
  /** Which color to apply to the icon */
  fill: PropTypes.string,
};

Note.defaultProps = {
  fill: colors.textPrimary,
};

export default Note;
