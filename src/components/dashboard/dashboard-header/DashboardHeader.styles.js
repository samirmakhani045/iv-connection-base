import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';
import * as typo from '@studio/theme/typography';

import Button from '@studio/components/button';

export const Wrapper = styled.div({
  alignItems: 'center',
  backgroundColor: colors.white,
  borderBottom: `0.1rem solid ${colors.cloud2}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '2.4rem 4rem',
});

export const H1 = styled.h1({
  ...typo.H3_M,
  margin: 0,
});

export const StyledButton = styled(Button)({
  width: 'auto',
});
