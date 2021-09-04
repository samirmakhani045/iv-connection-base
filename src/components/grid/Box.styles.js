import styled from 'styled-components/macro';

import * as breakpoints from '@studio/theme/breakpoints';

const noForwardProps = ['as', 'breakpoints', 'columns', 'offset'];

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  gridColumnEnd: `span ${props.columns}`,
  ...(props?.offset && { gridColumnStart: props.offset + 1 }),

  [breakpoints.extraSmallMedia]: {
    gridColumnEnd: `span ${props.breakpoints.xs.columns}`,
    ...(props?.breakpoints?.xs?.offset && { gridColumnStart: props.breakpoints.xs.offset + 1 }),
  },

  [breakpoints.smallMedia]: {
    gridColumnEnd: `span ${props.breakpoints.sm.columns}`,
    ...(props?.breakpoints?.sm?.offset && { gridColumnStart: props.breakpoints.sm.offset + 1 }),
  },

  [breakpoints.mediumMedia]: {
    gridColumnEnd: `span ${props.breakpoints.md.columns}`,
    ...(props?.breakpoints?.md?.offset && { gridColumnStart: props.breakpoints.md.offset + 1 }),
  },

  [breakpoints.largeMedia]: {
    gridColumnEnd: `span ${props.breakpoints.lg.columns}`,
    ...(props?.breakpoints?.lg?.offset && { gridColumnStart: props.breakpoints.lg.offset + 1 }),
  },
}));
