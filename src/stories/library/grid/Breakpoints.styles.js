import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '3rem',

  '&:last-child': {
    marginBottom: 0,
  },
});

export const P = styled.p({
  fontSize: '1rem',
  textTransform: 'uppercase',
});

export const I = styled.i({
  color: colors.textSecondary,
});

export const Code = styled.code({
  backgroundColor: colors.cloud2,
  borderRadius: '0.4rem',
  fontSize: '1.1rem',
  padding: '1rem',
});
