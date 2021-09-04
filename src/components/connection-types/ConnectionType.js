import React from 'react';
import PropTypes from 'prop-types';

import './ConnectionType.scss';

const ConnectionTypes = ({ nextStep }) => {
  const selectType = (value) => {
    nextStep({ connectionType: value });
  };

  return (
    <div className="type-body">
      <div className="type" onClick={() => selectType('snowflake')} aria-hidden="true">
        <img src="images/snowflake-icon.png" alt="snowflake" />
        <span>SnowFlake</span>
        <img className="close-icon" src="images/close-arrow-bg.png" alt="close" />
      </div>
      <div className="type" onClick={() => selectType('github')} aria-hidden="true">
        <img src="images/github-icon.png" alt="github" />
        <span>Github</span>
        <img className="close-icon" src="images/close-arrow-bg.png" alt="close" />
      </div>
      <div className="type" onClick={() => selectType('postgreSql')} aria-hidden="true">
        <img src="images/postgresql-icon.png" alt="postgre" />
        <span>PostGreSQL</span>
        <img className="close-icon" src="images/close-arrow-bg.png" alt="close" />
      </div>
      <div className="type noborder" onClick={() => selectType('mySql')} aria-hidden="true">
        <img src="images/mysql-icon.png" alt="mysql" />
        <span>MySQL</span>
        <img className="close-icon" src="images/close-arrow-bg.png" alt="snowflake" />
      </div>
    </div>
  );
};

ConnectionTypes.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default ConnectionTypes;
