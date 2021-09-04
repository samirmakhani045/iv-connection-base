import styled from 'styled-components/macro';
import * as typo from '@studio/theme/typography';
export const ConnectionInputsContainer = styled.div({});

export const InputImages = styled.img({
  width: 34,
  paddingBottom: 16,
});

export const ConnectionDiv = styled.div({
  textAlign: 'left',
  paddingBottom: 16,
});

export const TestButtonContainer = styled.div({
  ...typo.P_S2_B,
  marginBottom: 16,
});
export const flashMessageContainer = styled.div({
  width: '100%',
});
export const StepFooterContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: 20,
  marginTop: 12,
});
