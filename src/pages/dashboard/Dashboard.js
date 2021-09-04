import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { mapCommonStates } from '@utils/store';
import { useTranslation } from '@studio/hooks/useTranslation';
import { DashboardSidebar, DashboardHeader } from '@studio/components/dashboard';

import Stepper from '@studio/components/stepper/Stepper';

import { Wrapper, DashboardContent, ConnectionDialog } from './Dashboard.styles';

const Dashboard = (props) => {
  const {
    data: { sidebar, header },
    onCreateFlow,
    onInvite,
  } = props;
  const { t } = useTranslation('pages.dashboard');
  const [showConnection, setShowConnection] = useState(false);

  const handleOnCreateFlow = () => {
    console.log('handleOnCreateFlow');
    onCreateFlow();
  };

  const handleOnInvite = () => {
    console.log('handleOnInvite');
    onInvite();
  };

  const handleOnCreateConnection = () => {
    setShowConnection(!showConnection);
  };
  const steps = ['SELECT A SOURCE', 'ENTER A CREDENTIALS', 'ADD TO GROUP(S)'];
  return (
    <Wrapper>
      <DashboardSidebar
        {...sidebar}
        onCreateFlow={handleOnCreateFlow}
        onInvite={handleOnInvite}
        onCreateConnection={handleOnCreateConnection}
      />
      <DashboardContent>
        <DashboardHeader title={t('header.title')} onCreateFlow={handleOnCreateFlow} {...header} />
      </DashboardContent>
      {showConnection && (
        <ConnectionDialog onClick={() => setShowConnection(false)}>
          <div
            className="container"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Stepper steps={steps} />
          </div>
        </ConnectionDialog>
      )}
    </Wrapper>
  );
};

Dashboard.propTypes = {
  /** Normalized data that feeds dashboard page */
  data: PropTypes.shape({
    sidebar: PropTypes.shape({
      companyTitle: PropTypes.string,
      companyIcon: PropTypes.string,
      groups: PropTypes.array,
    }),
    header: PropTypes.shape({
      title: PropTypes.string,
      notificationCount: PropTypes.number,
    }),
    flows: PropTypes.array,
    groups: PropTypes.array,
  }),
  /** Callback to create flow. Hide create flow button if undefined */
  onCreateFlow: PropTypes.func,
  /** Callback to invite new groupmates */
  onInvite: PropTypes.func,
  connectors: PropTypes.array,
};

export default mapCommonStates(Dashboard);
