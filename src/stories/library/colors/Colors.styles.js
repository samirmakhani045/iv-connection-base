import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';

export const Wrapper = styled.ul({
  display: 'flex',
  flexdirection: 'column',
  flexWrap: 'wrap',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const ColorWrapper = styled.li({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: '3rem 1fr 1fr',
  maxWidth: '40rem',
  width: '100%',
});

export const ColorSquare = styled.div((props) => ({
  backgroundColor: props.color,
  ...(props.hasBorder && { border: `0.1rem solid ${colors.cloud4}` }),
  height: '3rem',
  width: '3rem',
}));

export const ColorName = styled.span({
  color: colors.textSecondary,
  fontFamily: 'monospace',
  fontSize: '1rem',
  paddingLeft: '1rem',
});
