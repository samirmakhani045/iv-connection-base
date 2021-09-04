import React from 'react';
import PropTypes from 'prop-types';

import { TypeBody, Type, TypeImgLogo, TypeTitle, TypeCloseIcon } from './Connection.styles';

const ConnectionTypes = ({ nextStep }) => {
  const selectType = (value) => {
    nextStep({ connectionType: value });
  };

  return (
    <TypeBody>
      <Type onClick={() => selectType('snowflake')} aria-hidden="true">
        <TypeImgLogo src="images/snowflake-icon.png" alt="snowflake"></TypeImgLogo>
        <TypeTitle>SnowFlake</TypeTitle>
        <TypeCloseIcon src="images/close-arrow-bg.png" alt="close"></TypeCloseIcon>
      </Type>
      <Type onClick={() => selectType('github')} aria-hidden="true">
        <TypeImgLogo src="images/github-icon.png" alt="github"></TypeImgLogo>
        <TypeTitle>Github</TypeTitle>
        <TypeCloseIcon src="images/close-arrow-bg.png" alt="close"></TypeCloseIcon>
      </Type>
      <Type onClick={() => selectType('postgreSql')} aria-hidden="true">
        <TypeImgLogo src="images/postgresql-icon.png" alt="postgre"></TypeImgLogo>
        <TypeTitle>PostGreSQL</TypeTitle>
        <TypeCloseIcon src="images/close-arrow-bg.png" alt="close"></TypeCloseIcon>
      </Type>
      <Type onClick={() => selectType('mySql')} aria-hidden="true">
        <TypeImgLogo src="images/mysql-icon.png" alt="mysql"></TypeImgLogo>
        <TypeTitle>MySQL</TypeTitle>
        <TypeCloseIcon src="images/close-arrow-bg.png" alt="close"></TypeCloseIcon>
      </Type>
    </TypeBody>
  );
};

ConnectionTypes.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default ConnectionTypes;
