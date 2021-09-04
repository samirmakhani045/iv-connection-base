import React from 'react';
import PropTypes from 'prop-types';
import { InputImages } from '@studio/components/connection-inputs/ConnectionInputs.styles';

const SelectedImage = (props) => {
  const { connectionType } = props;

  return (
    <>
      {connectionType === 'snowflake' && (
        <div>
          <InputImages src="images/snowflake-icon.png" alt="snowflake" />
        </div>
      )}
      {connectionType === 'github' && (
        <div>
          <InputImages src="images/github-icon.png" alt="github" />
        </div>
      )}
      {connectionType === 'postgres' && (
        <div>
          <InputImages src="images/postgresql-icon.png" alt="postgreSql" />
        </div>
      )}
      {connectionType === 'mysql' && (
        <div>
          <InputImages src="images/mysql-icon.png" alt="mySql" />
        </div>
      )}
    </>
  );
};

SelectedImage.propTypes = {
  connectionType: PropTypes.string.isRequired,
};

export default SelectedImage;
