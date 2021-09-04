import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';
import { Icon } from '@studio/components/icons';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginBottom: '3rem',

  '&:last-child': {
    marginBottom: 0,
  },
});

export const IconWrapper = styled.div({
  display: 'inline-flex',
  flexDirection: 'column',
  margin: '0 2rem 2rem 0',
  width: '8rem',
});

export const IconName = styled.p({
  color: colors.textSecondary,
  fontSize: '1rem',
  textTransform: 'uppercase',
});

export const StyledIcon = styled(Icon)({
  marginBottom: '0.5rem',
});
