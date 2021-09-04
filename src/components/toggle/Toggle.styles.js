import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';

const noForwardProps = ['checked', 'disabled'];

export const Container = styled('div', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  alignItems: 'center',
  backgroundColor: props.disabled ? colors.cloud0 : props.checked ? colors.green : colors.cloud3,
  borderRadius: '2.4rem',
  display: 'flex',
  height: '2.4rem',
  justifyContent: props.checked ? 'flex-end' : 'flex-start',
  padding: '0.4rem',
  position: 'relative',
  width: '4.2rem',

  ...(!props.disabled && { boxShadow: colors.shadow0 }),
}));

export const Input = styled.input({
  display: 'none',
});

export const Label = styled.label((props) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',

  ...(!props.disabled && { cursor: 'pointer' }),
}));

export const Thumb = styled.div({
  backgroundColor: colors.white,
  borderRadius: '1.6rem',
  height: '1.6rem',
  width: '1.6rem',
});
