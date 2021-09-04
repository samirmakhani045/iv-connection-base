import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ConnectionGroups.scss';
import SelectedImage from '@studio/utils/selectedImage';

import Button from '../button/Button';

const ConnectionGroups = ({ previousStep, connectionType, onlyMe, allUsers }) => {
  const [onlyMeValue, setOnlyMe] = useState(onlyMe);
  const [allUsersValue, setAllUsers] = useState(allUsers);
  const backStep = () => {
    previousStep({ onlyMe: onlyMeValue, allUsers: allUsersValue });
  };

  return (
    <>
      <div className="top">
        <div className="topgroup">
          <div>
            <SelectedImage connectionType={connectionType} />
          </div>
          <div className="database-text">
            <span>My database name</span>
          </div>
          <div className="connect-text">Connected</div>
        </div>
        <div className="number-table">34 tabs</div>
      </div>
      <div className="share-text">Share this connection with your groups</div>
      <div className="input-box">
        <div className="input-box-first">
          <div className="first">
            <div className="blank-div" />
            <div className={`only-me-text ${!onlyMeValue ? 'fontColor' : ''}`}>Only Me</div>
          </div>
          <div className="custom-checkbox">
            <input type="checkbox" checked={onlyMeValue} onClick={() => setOnlyMe(!onlyMeValue)} />
            <span className="chk-tick" />
          </div>
        </div>
        <div className="input-box-second">
          <div className="first">
            <div className="blank-div" />
            <div className={`only-me-text ${!allUsersValue ? 'fontColor' : ''}`}>All Users</div>
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
        <Button variant="light" onClick={() => backStep()} label="Back" />
        <Button variant="dark" disabled="true" label="Next" />
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
