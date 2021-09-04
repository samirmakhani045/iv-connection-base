import React from 'react';

import { Wrapper } from './Typography.styles';

const Typography = () => {
  return (
    <>
      <h1>Typography</h1>
      <Wrapper>
        <h1>h1. Heading</h1>
        <h2>h2. Heading</h2>
        <h3>h3. Heading</h3>
        <h4>h4. Heading</h4>
        <h5>h5. Heading</h5>
        <h6>h6. Heading</h6>
      </Wrapper>

      <Wrapper>
        {/* prettier-ignore */}
        <p>p. Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet ullamcorper enim. Quisque venenatis et urna vel congue. Suspendisse efficitur, dui eget semper tincidunt, tellus leo pulvinar augue, in accumsan dolor nunc id tortor.</p>
      </Wrapper>
    </>
  );
};

export default Typography;
