import styled, { css } from 'styled-components/macro';

import * as colors from '@studio/theme/colors';
import * as typo from '@studio/theme/typography';
import { multiline } from '@studio/theme/truncate';

export const OptionWrapper = styled.div({
  display: 'flex',
});

export const SelectIconWrapper = styled.div({
  display: 'inline-flex',
  height: '1.6rem',
  marginLeft: '1.2rem',
  minWidth: '1.6rem',
  width: '1.6rem',

  svg: {
    height: '100%',
    width: '100%',
  },
});

export const IconWrapper = styled.div({
  display: 'inline-flex',
  height: '1.6rem',
  marginRight: '0.6rem',
  minWidth: '1.6rem',
  width: '1.6rem',

  svg: {
    height: '100%',
    width: '100%',
  },
});

export const NoIcon = styled.div({
  backgroundColor: colors.cloud2,
  borderRadius: '50%',
  height: '1.6rem',
  minWidth: '1.6rem',
  width: '1.6rem',
});

export const Pill = styled.div({
  ...typo.P_S2,
  backgroundColor: colors.cloud2,
  borderRadius: '1.2rem',
  color: colors.textSecondary,
  flex: '1 0 auto',
  height: '1.7rem',
  marginLeft: '0.4rem',
  minWidth: '3rem',
  padding: '0.2rem 0.4rem',
});

export const Span = styled.span(
  {},
  css`
    ${multiline()}
  `,
);
