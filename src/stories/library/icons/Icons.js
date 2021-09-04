import React from 'react';

import { getAllIcons } from '@utils/stories/getAllIcons';

import { Wrapper, IconWrapper, IconName, StyledIcon } from './Icons.styles';

const Icons = () => {
  return (
    <>
      <h1>Icons</h1>
      <Wrapper>
        {getAllIcons().map((iconName, index) => (
          <IconWrapper key={index}>
            <StyledIcon name={iconName} size={30} />
            <IconName>{iconName}</IconName>
          </IconWrapper>
        ))}
      </Wrapper>
    </>
  );
};

export default Icons;
