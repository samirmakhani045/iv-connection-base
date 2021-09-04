import styled from 'styled-components/macro';

import * as breakpoints from '@studio/theme/breakpoints';

const noForwardProps = [
  'align',
  'as',
  'breakpoints',
  'columns',
  'gap',
  'gutter',
  'offset',
  'width',
];

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  display: 'grid',
  gap: props.gap,
  gridAutoFlow: 'column',
  gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))`,
  justifyContent: props.align,
  margin: 'auto',
  maxWidth: props.width,
  padding: `0 ${props.gutter}`,
  width: '100%',

  [breakpoints.extraSmallMedia]: {
    gap: props.breakpoints.xs.gap,
    gridTemplateColumns: `repeat(${props.breakpoints.xs.columns}, minmax(0, 1fr))`,
    justifyContent: props.breakpoints.xs.align,
    padding: `0 ${props.breakpoints.xs.gutter}`,
    width: props.breakpoints.xs.width,
  },

  [breakpoints.smallMedia]: {
    gap: props.breakpoints.sm.gap,
    gridTemplateColumns: `repeat(${props.breakpoints.sm.columns}, minmax(0, 1fr))`,
    justifyContent: props.breakpoints.sm.align,
    padding: `0 ${props.breakpoints.sm.gutter}`,
    width: props.breakpoints.sm.width,
  },

  [breakpoints.mediumMedia]: {
    gap: props.breakpoints.md.gap,
    gridTemplateColumns: `repeat(${props.breakpoints.md.columns}, minmax(0, 1fr))`,
    justifyContent: props.breakpoints.md.align,
    padding: `0 ${props.breakpoints.md.gutter}`,
    width: props.breakpoints.md.width,
  },

  [breakpoints.largeMedia]: {
    gap: props.breakpoints.lg.gap,
    gridTemplateColumns: `repeat(${props.breakpoints.lg.columns}, minmax(0, 1fr))`,
    justifyContent: props.breakpoints.lg.align,
    padding: `0 ${props.breakpoints.lg.gutter}`,
    width: props.breakpoints.lg.width,
  },
}));
