import styled, { css, keyframes } from 'styled-components/macro';

import * as colors from '@studio/theme/colors';

const loading = keyframes`
  0% { transform: translateX(-200%); }
  50% { transform: translateX(-150%); }
  100% { transform: translateX(450%); }
`;

export const Div = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const Line = styled.div(
  (props) => ({
    backgroundColor: colors.cloud2,
    height: props.height,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',

    '&+&': {
      marginTop: props.spacing,
    },
  }),
  css`
    &:after {
      animation: ${loading} 1500ms ease infinite;
      background-color: ${colors.whiteA60};
      box-shadow: 0 0 1em 2em ${colors.whiteA60};
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 25%;
    }
  `,
);
