import styled from 'styled-components/macro';

export const TypeBody = styled.div({
  width: '100%',
  textAlign: 'left',
  cursor: 'pointer',
});

export const Type = styled.div`
  padding: 20px 9px;
  position: relative;
  border-bottom: 1px solid #0000001a;
  &:hover {
    background-color: #eee;
  }
`;

export const TypeImage = styled.img((props) => ({
  width: '32px',

  ...(props.close && {
    float: 'right',
    width: '15px !important',
    paddingTop: '5px',
  }),
}));

export const TypeSpan = styled.span({
  paddingTop: '5px',
  paddingLeft: '14px',
  fontSize: '20px',
  position: 'absolute',
});
