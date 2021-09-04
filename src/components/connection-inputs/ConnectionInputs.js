import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ConnectionInputs.scss';
import Input from '../input/Input';
import Button from '../button/Button';

const ConnectionInputs = ({
  connectionType,
  nickName,
  databaseName,
  warehouse,
  server,
  port,
  previousStep,
  nextStep,
}) => {
  const [nickNameValue, setNickName] = useState(nickName);
  const [databaseNameValue, setDatabaseName] = useState(databaseName);
  const [warehouseValue, setWarehouse] = useState(warehouse);
  const [serverValue, setServer] = useState(server);
  const [portValue, setPort] = useState(port);
  const [isShowSuccess, setSuccess] = useState(false);
  const [isShowError, setError] = useState(false);

  const testConnection = () => {
    if (!nickNameValue) {
      setError(true);
      setSuccess(false);
    } else {
      setSuccess(true);
      setError(false);
    }
  };

  const backStep = () => {
    previousStep({
      nickName: nickNameValue,
      databaseName: databaseNameValue,
      warehouse: warehouseValue,
      server: serverValue,
      port: portValue,
    });
  };

  const forwardStep = () => {
    nextStep({
      nickName: nickNameValue,
      databaseName: databaseNameValue,
      warehouse: warehouseValue,
      server: serverValue,
      port: portValue,
    });
  };

  return (
    <>
      <div className="connection-inputs">
        {connectionType === 'snowflake' && (
          <div>
            <img className="input-images" src="images/snowflake-icon.png" alt="snowflake" />
          </div>
        )}
        {connectionType === 'github' && (
          <div>
            <img className="input-images" src="images/github-icon.png" alt="github" />
          </div>
        )}
        {connectionType === 'postgreSql' && (
          <div>
            <img className="input-images" src="images/postgresql-icon.png" alt="postgreSql" />
          </div>
        )}
        {connectionType === 'mySql' && (
          <div>
            <img className="input-images" src="images/mysql-icon.png" alt="mySql" />
          </div>
        )}
        <div className="connection-div">
          <Input
            type="text"
            maxLength="35"
            value={nickNameValue}
            name="nickName"
            onChange={(e) => setNickName(e.target.value)}
            label="Nick name *"
            id="nickName"
          />
        </div>
        <div className="connection-div">
          <Input
            type="text"
            maxLength="35"
            value={databaseNameValue}
            name="databaseName"
            onChange={(e) => setDatabaseName(e.target.value)}
            label="Datebase name"
            id="database"
          />
        </div>
        <div className="connection-div">
          <Input
            type="text"
            maxLength="35"
            value={warehouseValue}
            name="warehouse"
            onChange={(e) => setWarehouse(e.target.value)}
            label="Warehouse"
            id="warehouse"
          />
        </div>
        <div className="connection-div">
          <Input
            type="text"
            maxLength="35"
            value={serverValue}
            name="server"
            onChange={(e) => setServer(e.target.value)}
            label="Server"
            id="server"
          />
        </div>
        <div className="connection-div">
          <Input
            type="text"
            maxLength="5"
            value={portValue}
            name="port"
            onChange={(e) => setPort(e.target.value)}
            label="Port"
            id="port"
            isNumber="true"
          />
        </div>
        <div className="testButton">
          <Button
            variant="light"
            isFull="true"
            onClick={() => testConnection()}
            label="Test connection"
          />
        </div>
        {isShowSuccess && (
          <div className="connection-success">
            <p>Your connection has been tested & is now working</p>
          </div>
        )}
        {isShowError && (
          <div className="connection-error">
            <p>We could not connect with your source. Make sure to fill all the input correctly.</p>
          </div>
        )}
      </div>
      <div className="stepFooter">
        <Button variant="light" onClick={() => backStep()} label="Back" />
        <Button
          variant="dark"
          disabled={!isShowSuccess}
          onClick={() => forwardStep()}
          label="Next"
        />
      </div>
    </>
  );
};

ConnectionInputs.propTypes = {
  connectionType: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  databaseName: PropTypes.string.isRequired,
  warehouse: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired,
  port: PropTypes.string.isRequired,
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
};

export default ConnectionInputs;
