import React from 'react';

import * as fonts from '@studio/theme/fonts';

import { Wrapper, FontDescription, FontWeight, FontSample } from './Fonts.styles';

const Fonts = () => {
  return (
    <>
      <h1>Fonts</h1>
      <Wrapper>
        <FontDescription>{fonts.family.inter}</FontDescription>
        {Object.keys(fonts.weight).map((description, index) => (
          <FontWeight key={index}>
            <FontSample weight={fonts.weight[description]}>Aa</FontSample>
            <FontDescription>{description}</FontDescription>
          </FontWeight>
        ))}
      </Wrapper>
    </>
  );
};

export default Fonts;
