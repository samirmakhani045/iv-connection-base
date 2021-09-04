import React from 'react';

import { Wrapper, P, I, Code } from './Breakpoints.styles';

const Breakpoints = () => {
  return (
    <>
      <Wrapper>
        <h1>Breakpoints</h1>
        <P>The grid has 4 media breakpoints that are used for targeting specific screen sizes:</P>
        <P>
          <I>code: screen resolution (description)</I>
        </P>
        <Code>
          {`xs: <= 767px (extra small for devices smaller than tablet)`}
          <br />
          {`sm: >= 768px && <= 1023 (small for tablet and small desktop)`}
          <br />
          {`md: >= 1024 && <= 1439 (medium for desktop)`}
          <br />
          {`lg: >= 1440px (large for bigger screens)`}
        </Code>
      </Wrapper>
    </>
  );
};

export default Breakpoints;
