import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FlashMessage from '@studio/components/flash-message/FlashMessage';
import { withTranslation } from '@utils/decorators';

import Input from '../input/Input';
import Button from '../button/Button';

import {
  ConnectionInputsContainer,
  InputImages,
  StepFooterContainer,
  ConnectionDiv,
  TestButtonContainer,
} from './connection-inputs.styles';
const positivedefaultProps = {
  label: 'Your connection has been tested & is now working',
  variant: 'positive',
  isFullWidth: true,
};
const alertdefaultProps = {
  label: 'We could not connect with your source. Make sure to fill all the input correctly.',
  variant: 'alert',
  isFullWidth: true,
};
const PositiveFlasHMessage = (props) =>
  withTranslation(() => <FlashMessage {...positivedefaultProps} {...props} />);

const AlertFlasHMessage = (props) =>
  withTranslation(() => <FlashMessage {...alertdefaultProps} {...props} />);

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
      <ConnectionInputsContainer>
        {connectionType === 'snowflake' && (
          <div>
            <InputImages src="images/snowflake-icon.png" alt="snowflake"></InputImages>
          </div>
        )}
        {connectionType === 'github' && (
          <div>
            <InputImages src="images/github-icon.png" alt="snowflake"></InputImages>
          </div>
        )}
        {connectionType === 'postgreSql' && (
          <div>
            <InputImages src="images/postgresql-icon.png" alt="snowflake"></InputImages>
          </div>
        )}
        {connectionType === 'mySql' && (
          <div>
            <InputImages src="images/mysql-icon.png" alt="snowflake"></InputImages>
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
        <TestButtonContainer>
          <Button
            variant="light"
            isFull="true"
            onClick={() => testConnection()}
            label="Test connection"
          />
        </TestButtonContainer>
        {isShowSuccess && <PositiveFlasHMessage></PositiveFlasHMessage>}
        {isShowError && <AlertFlasHMessage></AlertFlasHMessage>}
      </ConnectionInputsContainer>
      <StepFooterContainer>
        <Button variant="light" onClick={() => backStep()} label="Back" />
        <Button
          variant="dark"
          disabled={!isShowSuccess}
          onClick={() => forwardStep()}
          label="Next"
        />
      </StepFooterContainer>
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
