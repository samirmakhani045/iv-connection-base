import styled from 'styled-components/macro';

export const ConnectionText = styled.p({
  padding: '20px 0px 0px 26px',
  fontSize: '22px',
  fontWeight: '600',
});

export const StepWrapper = styled.div({
  display: 'flex',
  padding: '20px 24px',
});

export const StepBody = styled.div({
  width: '100%',
  height: '58%',
  padding: '0px 28px 20px 28px',
  textAlign: 'center',
});

export const StepLabel = styled.span({
  fontSize: '16px',
  padding: '0px 0px 0px 3px',
});

export const CircleWrapper = styled.div({
  padding: '3px 5px',
});

export const StepFooter = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '20px',
});

export const StepBlock = styled.div({});

export const Circle = styled.div((props) => ({
  width: '210px',
  border: '2px solid transparent',
  color: 'white',
  backgroundColor: props.completed ? '#43c0a3' : '#eff4f8',
  borderRadius: '5px',

  ...(props.selected && {
    background: props.stepperError
      ? 'linear-gradient(37deg, rgb(247, 108, 108) 10%, #eff4f8 0%) '
      : 'linear-gradient(37deg, #43c0a3 10%, #eff4f8 0%)',
  }),
}));
