import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';
import * as typo from '@studio/theme/typography';

export const Wrapper = styled.div((props) => ({
  backgroundColor: props.disabled || props.isEmpty ? colors.cloud0 : colors.white,
  border: `0.1rem solid ${props.disabled || props.isEmpty ? colors.cloud1 : colors.cloud2}`,
  borderRadius: '0.4rem',
  cursor: props.disabled ? 'default' : 'pointer',
  minWidth: '20rem',
  ...(props.disabled && { pointerEvents: 'none' }),
  ...(props.withError && { borderColor: colors.red }),
}));

export const customStyles = {
  control: (_, props) => ({
    ...(props.selectProps.menuIsOpen && { boxShadow: colors.shadow }),
    display: 'flex',
    justifyContent: 'space-between',
    height: '4.6rem',
    padding: '1.5rem 1.2rem',
    width: '100%',
  }),
  indicatorsContainer: () => ({
    alignSelf: 'center',
    display: 'inline-flex',
    height: '1.2rem',
    marginLeft: '1.2rem',
    width: '1.2rem',
    svg: {
      height: '100%',
      width: '100%',
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: colors.white,
    border: 'none',
    borderRadius: '0.4rem',
    boxShadow: colors.shadow2,
    marginTop: '0.4rem',
    padding: 0,
  }),
  menuList: (styles) => ({
    ...styles,
    maxHeight: '20.8rem',
    padding: '0.4rem 1.2rem',
  }),
  option: (_, props) => ({
    ...typo.P_S,
    borderBottom: `0.1rem solid ${colors.cloud2}`,
    color: props.isSelected ? colors.textPrimary : colors.textSecondary,
    display: 'flex',
    height: '4rem',
    justifyContent: 'space-between',
    padding: '1.2rem 0',
    '&:last-child': {
      borderBottom: 0,
    },
    '&:focus, &:hover': {
      color: colors.textPrimary,
      svg: {
        fill: colors.textPrimary,
      },
    },
  }),
  placeholder: (_, props) => ({
    color: props.isDisabled ? colors.textSecondary : colors.textPrimary,
  }),
  singleValue: () => ({
    display: 'inline-flex',
  }),
  valueContainer: (_, props) => ({
    ...typo.P_S,
    color: props.isDisabled ? colors.textSecondary : colors.textPrimary,
  }),
};
