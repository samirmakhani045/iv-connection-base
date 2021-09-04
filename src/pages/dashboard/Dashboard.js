import React from 'react';
import PropTypes from 'prop-types';

import { mapCommonStates } from '@utils/store';
import { useTranslation } from '@studio/hooks/useTranslation';
import { DashboardSidebar, DashboardHeader } from '@studio/components/dashboard';
import Stepper from '@studio/components/stepper/Stepper';

import { Wrapper, DashboardContent, ContentWrapper } from './Dashboard.styles';

const Dashboard = (props) => {
  const {
    data: { sidebar, header },
    onCreateFlow,
    onInvite,
  } = props;
  const { t } = useTranslation('pages.dashboard');

  const handleOnCreateFlow = () => {
    console.log('handleOnCreateFlow');
    onCreateFlow();
  };

  const handleOnInvite = () => {
    console.log('handleOnInvite');
    onInvite();
  };
  const steps = ['SELECT A SOURCE', 'ENTER A CREDENTIALS', 'ADD TO GROUP(S)'];

  return (
    <Wrapper>
      <DashboardSidebar {...sidebar} onCreateFlow={handleOnCreateFlow} onInvite={handleOnInvite} />
      <DashboardContent>
        <DashboardHeader title={t('header.title')} onCreateFlow={handleOnCreateFlow} {...header} />
        <ContentWrapper>
          <div className="container">
            <Stepper steps={steps} />
          </div>
        </ContentWrapper>
      </DashboardContent>
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
};

export default mapCommonStates(Dashboard);
