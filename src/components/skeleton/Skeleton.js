import React from 'react';
import PropTypes from 'prop-types';

import { Div, Line } from './Skeleton.styles';

const Skeleton = (props) => {
  const { lines, spacing, height } = props;

  const totalLines = lines < 1 ? 1 : lines;
  const lineHeight = height < 1 ? 12 : height;

  return (
    <Div>
      {[...Array(totalLines)].map((_, index) => (
        <Line key={index} spacing={`${spacing / 10}rem`} height={`${lineHeight / 10}rem`} />
      ))}
    </Div>
  );
};

Skeleton.propTypes = {
  /** Number of skeleton lines, minimum of one */
  lines: PropTypes.number,
  /** Spacing in px (without unit) between skeleton lines, only applies if more than one */
  spacing: PropTypes.number,
  /** Height in px (without unit) of each skeleton line */
  height: PropTypes.number,
};

Skeleton.defaultProps = {
  lines: 1,
  spacing: 2,
  height: 12,
};

export default Skeleton;
