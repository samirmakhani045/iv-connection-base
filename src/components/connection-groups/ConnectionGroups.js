import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from '@studio/hooks/useTranslation';

import SelectedImage from '@studio/utils/selectedImage';
import FooterLayout from '@studio/utils/footerBtn';

import { StepFooter } from '../stepper/Stepper.styles';

import {
  GroupWrapper,
  TopGroup,
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
  const { t } = useTranslation('components.connectionGroups'); // 'common.forms'
  return (
    <>
      <GroupWrapper>
        <TopGroup>
          <div>
            <SelectedImage connectionType={connectionType} />
          </div>
          <DatabaseText>
            <span>{t('databaseName')}</span>
          </DatabaseText>
          <ConnectedText>{t('connected')}</ConnectedText>
        </TopGroup>
        <NumberTable>34 {t('tab')}</NumberTable>
      </GroupWrapper>
      <ShareText>{t('shareConnectionGroups')}</ShareText>
      <InputBox>
        <InputBoxChild first>
          <First>
            <BlankDiv first />
            <OnlyMeText fontColor={!onlyMeValue}>{t('onlyMe')}</OnlyMeText>
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
            <OnlyMeText fontColor={!allUsersValue}>{t('allUser')}</OnlyMeText>
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
        <FooterLayout backStep={backStep} isShowSuccess />
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
