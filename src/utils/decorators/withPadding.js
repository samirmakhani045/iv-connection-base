import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div({
  padding: '3rem',
});

const withPadding = (story) => <Wrapper>{story()}</Wrapper>;

export default withPadding;
