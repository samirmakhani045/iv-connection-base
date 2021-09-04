import styled from 'styled-components/macro';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  marginBottom: '3rem',

  '&:last-child': {
    marginBottom: '0',
  },
});
