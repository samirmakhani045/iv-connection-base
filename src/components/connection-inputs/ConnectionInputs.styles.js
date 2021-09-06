import styled from 'styled-components/macro';

export const ConnectionDiv = styled.div({
  textAlign: 'left',
  paddingBottom: '16px',
});

export const InputImages = styled.img({
  width: '34px',
  paddingBottom: '16px',
});

export const TestButton = styled.div({
  marginBottom: '16px',
  fontSize: '16px',
});

export const ConnectionMessage = styled.div((props) => ({
  width: '100%',
  height: props.success ? '50px' : '52px',
  padding: '15px 0px',
  borderRadius: '5px',
  margin: '16px 0px',
  background: props.success ? '#d8f6ef' : '#ffebec',

  ...(!props.success && {
    display: 'flex',
    justifyContent: 'center',
  }),
}));

export const Text = styled.p((props) => ({
  color: props.success ? '#58c8ae' : '#f76c6c',
}));

export const InputWrapper = styled.div({});
