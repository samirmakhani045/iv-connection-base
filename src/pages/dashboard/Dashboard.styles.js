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
