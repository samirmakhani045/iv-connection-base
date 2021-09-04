import styled, { css } from 'styled-components/macro';

import * as colors from '@studio/theme/colors';
import * as typo from '@studio/theme/typography';
import { multiline } from '@studio/theme/truncate';
import { Icon } from '@studio/components/icons';

const noForwardProps = ['withError', 'withIcon', 'withValue'];

export const Wrapper = styled.div({
  position: 'relative',
});

export const Label = styled.label({
  display: 'block',
  height: '4.6rem',
  position: 'relative',
  width: '100%',
});

export const Span = styled('span', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})(
  (props) => ({
    color: props.withError ? colors.error : colors.textSecondary,
    left: '1.2rem',
    pointerEvents: 'none',
    position: 'absolute',
    top: props.withValue ? '1.1rem' : '1.5rem',
    transition: '150ms ease-in-out',
    width: props.withIcon ? 'calc(100% - 5.8rem)' : 'calc(100% - 2.4rem)',
    ...(props.withValue ? typo.P_S3 : typo.P_S),
  }),
  css`
    ${multiline()}
  `,
);

export const StyledIcon = styled(Icon, {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})((props) => ({
  display: 'inline-flex',
  position: 'absolute',
  right: '1.2rem',
  top: '1.7rem',

  svg: {
    fill: props.withError ? colors.error : colors.textSecondary,
    position: 'relative',
    right: 0,
    top: 0,
  },
}));

export const StyledInput = styled('input', {
  shouldForwardProp: (prop) => !noForwardProps.includes(prop),
})(
  (props) => ({
    ...typo.P_S,
    backgroundColor: props.disabled || !props.value ? colors.cloud0 : colors.white,
    borderRadius: '0.4rem',
    border: `0.1rem solid ${
      props.withError ? colors.error : !props.value ? colors.cloud1 : colors.cloud2
    }`,
    color: props.disabled ? colors.textSecondary : colors.textPrimary,
    height: '100%',
    outline: 0,
    padding: '2.1rem 1.2rem 1rem',
    transition: '150ms ease-in-out',
    width: '100%',
    ...(props.withIcon && { paddingRight: '4.6rem' }),

    '&:enabled': {
      '&:focus, &:hover': {
        backgroundColor: colors.white,
        borderColor: colors.white,
        boxShadow: colors.shadow1,
      },

      '&:focus + span': {
        ...typo.P_S3,
        top: '1.1rem',
      },
    },
  }),
  css`
    &:enabled {
      &:focus,
      &:hover {
        ~ ${StyledIcon} {
          svg {
            fill: ${colors.textPrimary};
          }
        }
      }
    }
  `,
);

export const Error = styled.div({
  ...typo.P_S2,
  color: colors.error,
  marginTop: '0.6rem',
});
