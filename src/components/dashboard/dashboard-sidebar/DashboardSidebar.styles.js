import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';
import * as typo from '@studio/theme/typography';

import Button from '@studio/components/button';

export const Wrapper = styled.div({
  backgroundColor: colors.white,
  borderRight: `0.1rem solid ${colors.cloud2}`,
  color: colors.dark,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'space-between',
  minWidth: '24.8rem',
  overflow: 'auto',
  padding: '2.4rem 2.4rem 3.2rem',
  width: '24.8rem',
});

export const SidebarMenuWrapper = styled.div({
  marginBottom: '2.4rem',
});

export const SidebarHeader = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '1.6rem',
});

export const HeaderImage = styled.img({
  borderRadius: '50%',
  height: '2.4rem',
  marginRight: '0.8rem',
  width: '2.4rem',
});

export const HeaderTitle = styled.div({
  ...typo.P_B,
});

export const StyledButton = styled(Button)({
  marginBottom: '0.8rem',
  width: '100%',

  '&:hover': {
    boxShadow: colors.shadow1,
  },
});
