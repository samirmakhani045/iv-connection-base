import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from '@studio/hooks/useTranslation';

import SidebarMenu from './sidebar-menu';
import SidebarFooter from './sidebar-footer';
import {
  StyledButton,
  HeaderImage,
  HeaderTitle,
  SidebarHeader,
  SidebarMenuWrapper,
  Wrapper,
} from './DashboardSidebar.styles';
import { menuOptions } from './config';

const DashboardSidebar = (props) => {
  const { companyTitle, companyIcon, onCreateFlow, onInvite } = props;
  const { t } = useTranslation('pages.dashboard');

  return (
    <Wrapper data-testid="dashboardSidebarWrapper">
      <SidebarMenuWrapper>
        <SidebarHeader>
          <HeaderImage src={companyIcon} alt={companyIcon} />
          <HeaderTitle>{companyTitle}</HeaderTitle>
        </SidebarHeader>

        {onCreateFlow && (
          <StyledButton
            label={t('menu.create')}
            icon="Add"
            variant="light"
            onClick={onCreateFlow}
            small
          />
        )}

        <SidebarMenu data={menuOptions} />
      </SidebarMenuWrapper>

      <SidebarFooter
        title={t('invite.header')}
        text={t('invite.content')}
        button={{
          logo: 'openlytics',
          label: t('invite.buttonLabel'),
          onClick: onInvite,
        }}
      />
    </Wrapper>
  );
};

DashboardSidebar.propTypes = {
  /** Company name */
  companyTitle: PropTypes.string.isRequired,
  /** Company corresponding icon */
  companyIcon: PropTypes.string.isRequired,
  /** Callback to create flow. Hide create flow button if undefined */
  onCreateFlow: PropTypes.func,
  /** Callback to invite new groupmates */
  onInvite: PropTypes.func,
  // TODO: create PropType for navigation(Will be required eventually)
  navigation: PropTypes.array,
};

DashboardSidebar.defaultProps = {
  companyTitle: '',
  companyIcon: '',
};

export default DashboardSidebar;
