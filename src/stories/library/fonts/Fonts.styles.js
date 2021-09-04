import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';

export const Wrapper = styled.div({
  marginBottom: '3rem',

  '&:last-child': {
    marginBottom: 0,
  },
});

export const FontDescription = styled.p({
  color: colors.textSecondary,
  fontSize: '1rem',
  textTransform: 'uppercase',
});

export const FontWeight = styled.div({
  display: 'inline-flex',
  flexDirection: 'column',
  marginRight: '2rem',
  width: '8rem',
});

export const FontSample = styled.p((props) => ({
  fontSize: '4rem',
  fontWeight: props.weight,
  margin: 0,
}));
