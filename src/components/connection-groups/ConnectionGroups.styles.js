import styled from 'styled-components/macro';

export const GroupWrapper = styled.div({
  border: '1px solid #00000038',
  padding: '16px',
  borderRadius: '5px',
});

export const TopGroup = styled.div({
  display: 'flex',
});

export const InputImages = styled.img({
  paddingTop: '5px',
  width: '20px',
});

export const DatabaseText = styled.div({
  fontSize: '26px',
  paddingLeft: '10px',
  color: '#313336',
});

export const ConnectedText = styled.div({
  background: '#d8f6ef',
  color: '#58c8ae',
  marginLeft: '10px',
  fontSize: '14px',
  padding: '5px',
  width: '14%',
  borderRadius: '20px',
  marginTop: '2px',
  height: '28px',
});

export const NumberTable = styled.div({
  textAlign: 'left',
  paddingLeft: '30px',
  fontSize: '16px',
  color: '#798b9c',
});

export const ShareText = styled.div({
  fontSize: '18px',
  color: '#798b9c',
  textAlign: 'left',
  marginTop: '20px',
});

export const InputBox = styled.div({
  border: '1px solid #00000038',
  padding: '16px',
  borderRadius: '5px',
  marginTop: '8px',
  marginBottom: '20px',
});

export const InputBoxChild = styled.div((props) => ({
  paddingBottom: '16px',
  display: 'flex',
  justifyContent: 'space-between',

  ...(props.first && {
    borderBottom: '1px solid #0000001c',
  }),
}));

export const First = styled.div({
  display: 'flex',
});

export const BlankDiv = styled.div((props) => ({
  width: '22px',
  backgroundColor: props.first ? '#262727' : '#e93a5a',
  height: '22px',
  borderRadius: '4px',
}));

export const OnlyMeTextv = styled.div({
  paddingLeft: '5px',
  fontSize: '18px',
});

export const CustomCheckBox = styled.div({
  display: 'block',
  height: '22px',
  width: '22px',
  position: 'relative',
  padding: '0px',
  cursor: 'pointer',
  fontSize: '16px',
  lineHeight: '22px',
  // -webkit-user-select: 'none',
  // -moz-user-select: 'none',
  // -ms-user-select: 'none',
  userSelect: 'none',
});

export const CheckBoxInput = styled.input({
  top: '0',
  left: '0',
  zIndex: '2',
  position: 'absolute',
  opacity: '0',
  cursor: 'pointer',
  height: '24px',
  width: '24px',
});

export const CheckTick = styled.span({
  position: 'absolute',
  top: '0',
  left: '0',
  height: '24px',
  width: '24px',
  border: '4px solid #9e9e9efc',
  borderRadius: '5px',
  backgroundColor: '#fff',
});
