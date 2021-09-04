import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';
import * as typo from '@studio/theme/typography';
import { weight } from '@studio/theme/fonts';
import { Icon } from '@studio/components/icons';

export const Ul = styled.ul({
  width: '100%',
});

export const Li = styled.li((props) => ({
  ...typo.P_S_M,
  borderBottom: `0.1rem solid ${colors.cloud2}`,
  color: colors.textPrimary,
  position: 'relative',

  ul: {
    borderTop: `0.1rem solid ${colors.cloud2}`,
  },

  li: {
    paddingLeft: '2.2rem',
  },

  '&:last-child': {
    borderBottom: 0,
  },

  ...(props.isActive && {
    '&:after': {
      content: '""',
      backgroundColor: colors.dark,
      height: '4.8rem',
      position: 'absolute',
      right: '-2.4rem',
      top: 0,
      width: '0.4rem',
    },
  }),
}));

export const LiWrapper = styled.div((props) => ({
  alignItems: 'center',
  color: props.isDisabled ? colors.textSecondary : colors.textPrimary,
  display: 'flex',
  padding: '1.6rem 0',
}));

export const StyledIcon = styled(Icon)({
  marginRight: '0.8rem',
});

export const IconFill = styled.div((props) => ({
  backgroundColor: props.fill,
  borderRadius: '0.2rem',
  height: '1.2rem',
  marginRight: '0.8rem',
  width: '1.2rem',
}));

export const Pill = styled.div({
  ...typo.P_S3_M,
  alignItems: 'center',
  backgroundColor: colors.cloud1,
  borderRadius: '1.6rem',
  color: colors.textSecondary,
  display: 'inline-flex',
  marginLeft: 'auto',
  padding: '0.4rem 0.8rem',
  textAlign: 'center',
});

export const Badge = styled.div((props) => ({
  alignItems: 'center',
  backgroundColor: props.isDisabled ? colors.cloud1 : colors.red,
  borderRadius: '1.4rem',
  color: props.isDisabled ? colors.textSecondary : colors.white,
  display: 'inline-flex',
  fontSize: '0.8rem',
  fontWeight: weight.bold,
  height: '1.4rem',
  justifyContent: 'center',
  lineHeight: '1.6rem',
  marginLeft: 'auto',
  minWidth: '1.4rem',
  padding: '0 0.2rem',
  textAlign: 'center',
}));
