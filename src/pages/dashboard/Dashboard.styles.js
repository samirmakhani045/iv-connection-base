import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';

export const Wrapper = styled.div({
  backgroundColor: colors.white,
  display: 'flex',
});

export const DashboardContent = styled.div({
  minHeight: '100%',
  overflow: 'auto',
  width: '100%',
});

export const ContentWrapper = styled.div({
  padding: '2.4rem 4rem',
});

export const ConnectionDialog = styled.div({
  padding: '2.4rem 4rem',
  zIndex: '1300',
  inset: '0px',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  display: 'flex',
  position: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});
