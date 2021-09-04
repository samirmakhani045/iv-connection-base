import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';
import * as typo from '@studio/theme/typography';
import Button from '@studio/components/button';

export const Title = styled.p({
  ...typo.P_S_B,
  marginBottom: '0.4rem',
});

export const P = styled.p({
  ...typo.P_S2_Bloc,
  color: colors.textSecondary,
  marginBottom: '0.8rem',
});

export const StyledButton = styled(Button)({
  width: '100%',
});
