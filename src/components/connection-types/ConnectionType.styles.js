import styled from 'styled-components/macro';

export const TypeBody = styled.div({
  width: '100%',
  textAlign: 'left',
  cursor: 'pointer',
});

export const Type = styled.div.attrs(`{
  padding: '20px 9px',
  position: 'relative',
  borderBottom: '1px solid #0000001a',

  &:hover {
    backgroundColor: #eee;
  }
}`);
