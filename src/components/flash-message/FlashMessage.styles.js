import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';
import * as typo from '@studio/theme/typography';
import Button from '@studio/components/button';

const noForwardProps = ['variant'];

const alertStyles = () => ({
  backgroundColor: colors.lightError1,
  color: colors.error,
});

const positiveStyles = () => ({
  backgroundColor: colors.lightGreen1,
  color: colors.green,
});

const defaultStyles = () => ({
  backgroundColor: colors.dark,
  color: colors.white,
});

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  ...(props.variant === 'alert' && alertStyles()),
  ...(props.variant === 'positive' && positiveStyles()),
  ...(props.variant === 'default' && defaultStyles()),
  ...typo.P_S,
  alignItems: 'center',
  borderRadius: '0.4rem',
  display: 'inline-flex',
  justifyContent: 'center',
  padding: props.withAction ? '0.6rem 0.6rem 0.6rem 1.2rem' : '1.2rem',
  textAlign: 'left',
  width: props?.isFullWidth ? '100%' : 'auto',
}));

export const StyledButton = styled(Button)({
  marginLeft: '1rem',
});
