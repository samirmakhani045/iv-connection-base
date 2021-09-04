import React from 'react';
import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';
import { Grid, Box } from '@studio/components/grid';

const Div = styled.div({
  position: 'relative',
});

const StyledGrid = styled(Grid)({
  height: 'calc(100vh - 2rem)',
  left: '50%',
  pointerEvents: 'none',
  position: 'absolute',
  top: '50vh',
  transform: 'translate(-50%, -50vh)',
  width: '100%',
  zIndex: '1000',
});

const StyledBox = styled(Box)({
  backgroundColor: colors.red,
  height: '100%',
  opacity: '0.1',

  '&:nth-child(odd)': {
    opacity: '0.15',
  },
});

const withGridOverlay = (story, props) => {
  if (!props?.args?.gridOverlay) return <>{story()}</>;

  return (
    <Div>
      {story()}
      <StyledGrid>
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
        <StyledBox />
      </StyledGrid>
    </Div>
  );
};

export default withGridOverlay;
