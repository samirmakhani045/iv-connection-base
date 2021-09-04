import React from 'react';

import * as colors from '@studio/theme/colors';

import { Wrapper, ColorWrapper, ColorSquare, ColorName } from './Colors.styles';

const Colors = () => {
  return (
    <>
      <h1>Colors</h1>
      <Wrapper>
        {Object.entries(colors).map(([colorName, colorValue]) => (
          <ColorWrapper key={colorName}>
            <ColorSquare color={colorValue} hasBorder={colorName.startsWith('white')} />
            <ColorName>{colorValue}</ColorName>
            <ColorName>{colorName}</ColorName>
          </ColorWrapper>
        ))}
      </Wrapper>
    </>
  );
};

export default Colors;
