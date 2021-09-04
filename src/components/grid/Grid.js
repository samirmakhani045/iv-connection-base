import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Grid.styles';

const Grid = (props) => {
  const { width, columns, gap, gutter, align, xs, sm, md, lg, children, ...remainingProps } = props;
  const propsBreakpoints = { xs, sm, md, lg };
  let breakpoints = {};
  ['xs', 'sm', 'md', 'lg'].forEach((breakpoint) => {
    breakpoints[breakpoint] = {
      align: propsBreakpoints[breakpoint]?.align || align,
      columns: propsBreakpoints[breakpoint]?.columns || columns,
      gap: propsBreakpoints[breakpoint]?.gap || gap,
      gutter: propsBreakpoints[breakpoint]?.gutter || gutter,
      width: propsBreakpoints[breakpoint]?.width || width,
    };
  });

  return (
    <Wrapper
      data-testid="grid"
      align={align}
      columns={columns}
      gap={gap}
      gutter={gutter}
      width={width}
      breakpoints={breakpoints}
      {...remainingProps}
    >
      {children}
    </Wrapper>
  );
};

const BreakpointPropType = PropTypes.shape({
  align: PropTypes.oneOf(['left', 'center', 'right']),
  columns: PropTypes.number,
  gap: PropTypes.string,
  gutter: PropTypes.string,
  width: PropTypes.string,
});

Grid.propTypes = {
  /** Children elements to render */
  children: PropTypes.node,
  /** Max width of the grid, e.g. 100%, 200px, 20rem, etc */
  width: PropTypes.string,
  /** Maximum number of columns per row */
  columns: PropTypes.number,
  /** Gap between columns, e.g, 10%, 20px, 2rem, etc */
  gap: PropTypes.string,
  /** Gutter/margin on each side of grid, e.g, 10%, 20px, 2rem, etc */
  gutter: PropTypes.string,
  /** Force content to snap to one of these positions */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** Configuration for breakpoint extraSmall */
  xs: BreakpointPropType,
  /** Configuration for breakpoint small */
  sm: BreakpointPropType,
  /** Configuration for breakpoint medium */
  md: BreakpointPropType,
  /** Configuration for breakpoint large */
  lg: BreakpointPropType,
};

Grid.defaultProps = {
  align: 'left',
  columns: 16,
  gap: '2rem',
  gutter: '0',
  width: '144rem',
};

export default Grid;
