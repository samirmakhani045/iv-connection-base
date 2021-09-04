import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ConnectionGroups.scss';
import SelectedImage from '@studio/utils/selectedImage';
import { useTranslation } from '@studio/hooks/useTranslation';

import Button from '../button/Button';

const ConnectionGroups = ({ previousStep, connectionType, onlyMe, allUsers }) => {
  const [onlyMeValue, setOnlyMe] = useState(onlyMe);
  const [allUsersValue, setAllUsers] = useState(allUsers);
  const backStep = () => {
    previousStep({ onlyMe: onlyMeValue, allUsers: allUsersValue });
  };
  const { t } = useTranslation('components.connectionGroups');
  return (
    <>
      <div className="top">
        <div className="topgroup">
          <div>
            <SelectedImage connectionType={connectionType} />
          </div>
          <div className="database-text">
            <span> {t('databaseName')} </span>
          </div>
          <div className="connect-text">{t('connected')}</div>
        </div>
        <div className="number-table">34 {t('tab')} </div>
      </div>
      <div className="share-text">{t('shareConnectionGroups')}</div>
      <div className="input-box">
        <div className="input-box-first">
          <div className="first">
            <div className="blank-div" />
            <div className={`only-me-text ${!onlyMeValue ? 'fontColor' : ''}`}>{t('onlyMe')}</div>
          </div>
          <div className="custom-checkbox">
            <input type="checkbox" checked={onlyMeValue} onClick={() => setOnlyMe(!onlyMeValue)} />
            <span className="chk-tick" />
          </div>
        </div>
        <div className="input-box-second">
          <div className="first">
            <div className="blank-div" />
            <div className={`only-me-text ${!allUsersValue ? 'fontColor' : ''}`}>
              {t('allUser')}
            </div>
          </div>
          <div className="custom-checkbox">
            <input
              type="checkbox"
              checked={allUsersValue}
              onClick={() => setAllUsers(!allUsersValue)}
            />
            <span className="chk-tick" />
          </div>
        </div>
      </div>
      <div className="stepFooter">
        <Button variant="light" onClick={() => backStep()} label={t('back')} />
        <Button variant="dark" disabled="true" label={t('next')} />
      </div>
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
