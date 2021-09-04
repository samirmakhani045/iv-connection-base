import styled from 'styled-components/macro';

export const TypeBody = styled.div({
  width: '100%',
  textAlign: 'left',
  cursor: 'pointer',
});

export const Type = styled.div({
  paddingLeft: 9,
  paddingRight: 9,
  paddingTop: 20,
  paddingBottom: 20,
  position: 'relative',
  borderBottom: '1px solid #0000001a',
  '&:hover': {
    backgroundColor: '#eee',
  },
});
export const TypeImgLogo = styled.img({
  width: 32,
});
export const TypeTitle = styled.span({
  paddingTop: 5,
  paddingLeft: 14,
  fontSize: 20,
  position: 'absolute',
});
export const TypeCloseIcon = styled.img({
  float: 'right',
  width: 15,
  paddingTop: 5,
});
