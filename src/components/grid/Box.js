import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Box.styles';

const Box = (props) => {
  const { columns, offset, xs, sm, md, lg, children, ...remainingProps } = props;
  const breakpoints = {
    xs: {
      columns: xs?.columns || columns,
      offset: xs?.offset || offset,
    },
    sm: {
      columns: sm?.columns || columns,
      offset: sm?.offset || offset,
    },
    md: {
      columns: md?.columns || columns,
      offset: md?.offset || offset,
    },
    lg: {
      columns: lg?.columns || columns,
      offset: lg?.offset || offset,
    },
  };

  return (
    <Wrapper columns={columns} offset={offset} breakpoints={breakpoints} {...remainingProps}>
      {children}
    </Wrapper>
  );
};

const BreakpointPropType = PropTypes.shape({
  columns: PropTypes.number,
  offset: PropTypes.number,
});

Box.propTypes = {
  /** Children elements to render */
  children: PropTypes.node,
  /** How many columns should this take */
  columns: PropTypes.number,
  /** How many columns to use as offset. This is affected by Grid align */
  offset: PropTypes.number,
  /** Configuration for breakpoint extraSmall */
  xs: BreakpointPropType,
  /** Configuration for breakpoint small */
  sm: BreakpointPropType,
  /** Configuration for breakpoint medium */
  md: BreakpointPropType,
  /** Configuration for breakpoint large */
  lg: BreakpointPropType,
};

Box.defaultProps = {
  columns: 1,
  offset: 0,
};

export default Box;
