import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../input/Input';
import Button from '../button/Button';

import {
  ConnectionDiv,
  TestButton,
  ConnectionMessage,
  Text,
  InputWrapper,
  InputImages,
} from './ConnectionInputs.styles';

const ConnectionInputs = ({
  connectionType,
  nickName,
  databaseName,
  warehouse,
  server,
  port,
  previousStep,
  nextStep,
  setStepError,
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
      if (setStepError) {
        setStepError(true);
      }
      setSuccess(false);
    } else {
      setSuccess(true);
      setError(false);
      if (setStepError) {
        setStepError(false);
      }
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
      <InputWrapper>
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
        {connectionType === 'postgreSql' && (
          <div>
            <InputImages src="images/postgresql-icon.png" alt="postgreSql" />
          </div>
        )}
        {connectionType === 'mySql' && (
          <div>
            <InputImages src="images/mysql-icon.png" alt="mySql" />
          </div>
        )}
        <ConnectionDiv>
          <Input
            type="text"
            maxLength="35"
            value={nickNameValue}
            name="nickName"
            onChange={(e) => setNickName(e.target.value)}
            label="Nick name *"
            id="nickName"
          />
        </ConnectionDiv>
        <ConnectionDiv>
          <Input
            type="text"
            maxLength="35"
            value={databaseNameValue}
            name="databaseName"
            onChange={(e) => setDatabaseName(e.target.value)}
            label="Datebase name"
            id="database"
          />
        </ConnectionDiv>
        <ConnectionDiv>
          <Input
            type="text"
            maxLength="35"
            value={warehouseValue}
            name="warehouse"
            onChange={(e) => setWarehouse(e.target.value)}
            label="Warehouse"
            id="warehouse"
          />
        </ConnectionDiv>
        <ConnectionDiv>
          <Input
            type="text"
            maxLength="35"
            value={serverValue}
            name="server"
            onChange={(e) => setServer(e.target.value)}
            label="Server"
            id="server"
          />
        </ConnectionDiv>
        <ConnectionDiv>
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
        </ConnectionDiv>
        <TestButton>
          <Button
            variant="light"
            isFull="true"
            onClick={() => testConnection()}
            label="Test connection"
          />
        </TestButton>
        {isShowSuccess && (
          <ConnectionMessage success={true}>
            <Text success={true}>Your connection has been tested & is now working</Text>
          </ConnectionMessage>
        )}
        {isShowError && (
          <ConnectionMessage success={false}>
            <Text success={false}>
              We could not connect with your source. Make sure to fill all the input correctly.
            </Text>
          </ConnectionMessage>
        )}
      </InputWrapper>
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
  // Gives connection image
  connectionType: PropTypes.string.isRequired,
  // Nick text
  nickName: PropTypes.string.isRequired,
  // Database text
  databaseName: PropTypes.string.isRequired,
  // Warehouse text
  warehouse: PropTypes.string.isRequired,
  // Server text
  server: PropTypes.string.isRequired,
  // Port number text
  port: PropTypes.string.isRequired,
  // Make forward step presing on next button
  nextStep: PropTypes.func.isRequired,
  // Make previous step presing on next button
  previousStep: PropTypes.func.isRequired,
  // When error accours then make red bottom line
  setStepError: PropTypes.func,
};

export default ConnectionInputs;
