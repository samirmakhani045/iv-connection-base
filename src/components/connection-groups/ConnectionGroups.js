import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';

import { StepFooter } from '../stepper/Stepper.styles';

import {
  GroupWrapper,
  TopGroup,
  InputImages,
  DatabaseText,
  ConnectedText,
  NumberTable,
  ShareText,
  InputBox,
  InputBoxChild,
  First,
  BlankDiv,
  OnlyMeText,
  CheckBoxInput,
  CustomCheckBox,
  CheckTick,
} from './ConnectionGroups.styles';

const ConnectionGroups = ({ previousStep, connectionType, onlyMe, allUsers }) => {
  const [onlyMeValue, setOnlyMe] = useState(onlyMe);
  const [allUsersValue, setAllUsers] = useState(allUsers);
  const backStep = () => {
    previousStep({ onlyMe: onlyMeValue, allUsers: allUsersValue });
  };

  return (
    <>
      <GroupWrapper>
        <TopGroup>
          <div>
            {/* <img className="input-images" src={snowFlackIcno}></img> */}
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
          </div>
          <DatabaseText>
            <span>My database name</span>
          </DatabaseText>
          <ConnectedText>Connected</ConnectedText>
        </TopGroup>
        <NumberTable>34 tabs</NumberTable>
      </GroupWrapper>
      <ShareText>Share this connection with your groups</ShareText>
      <InputBox>
        <InputBoxChild first>
          <First>
            <BlankDiv first />
            <OnlyMeText fontColor={!onlyMeValue}>Only Me</OnlyMeText>
          </First>
          <CustomCheckBox>
            <CheckBoxInput
              type="checkbox"
              checked={onlyMeValue}
              onClick={() => setOnlyMe(!onlyMeValue)}
            />
            <CheckTick />
          </CustomCheckBox>
        </InputBoxChild>
        <InputBoxChild>
          <First>
            <BlankDiv />
            <OnlyMeText fontColor={!allUsersValue}>All Users</OnlyMeText>
          </First>
          <CustomCheckBox>
            <CheckBoxInput
              type="checkbox"
              checked={allUsersValue}
              onClick={() => setAllUsers(!allUsersValue)}
            />
            <CheckTick />
          </CustomCheckBox>
        </InputBoxChild>
      </InputBox>
      <StepFooter>
        <Button variant="light" onClick={() => backStep()} label="Back" />
        <Button variant="dark" disabled="true" label="Next" />
      </StepFooter>
    </>
  );
};

ConnectionGroups.propTypes = {
  // Gives connection image
  connectionType: PropTypes.string.isRequired,
  // Make previous step presing on next button
  previousStep: PropTypes.func.isRequired,
  // Input check box value
  onlyMe: PropTypes.bool,
  // All user check box
  allUsers: PropTypes.bool,
};

ConnectionGroups.defaultProps = {
  onlyMe: true,
  allUsers: false,
};

export default ConnectionGroups;
