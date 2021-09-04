import React from 'react';
import { action } from '@storybook/addon-actions';

import { withPadding, withTranslation } from '@utils/decorators';
import { DashboardSidebar, DashboardHeader } from '@studio/components/dashboard';
import SidebarMenu from '@studio/components/dashboard/dashboard-sidebar/sidebar-menu';
import SidebarFooter from '@studio/components/dashboard/dashboard-sidebar/sidebar-footer';

import { menuOptions } from '@studio/components/dashboard/dashboard-sidebar/config';

import { data } from './data.mock';

export default {
  title: 'Dashboard/Components',
  argTypes: {},
  decorators: [(story) => withTranslation(story), (story) => withPadding(story)],
};

const TemplateDashboardSidebar = (args) => <DashboardSidebar {...args} />;

export const Sidebar = TemplateDashboardSidebar.bind({});
Sidebar.args = {
  ...data.sidebar,
  onInvite: action('onInvite'),
  onCreateFlow: action('onCreateFlow'),
};

const TemplateDashboardHeader = (args) => <DashboardHeader {...args} />;

export const Header = TemplateDashboardHeader.bind({});
Header.args = {
  ...data.header,
  onCreateFlow: action('onCreateFlow'),
};

const TemplateSidebarMenu = (args) => <SidebarMenu {...args} />;

export const Menu = TemplateSidebarMenu.bind({});
Menu.displayName = 'Sidebar Menu';
Menu.args = {
  data: menuOptions,
};

const TemplateSidebarFooter = (args) => <SidebarFooter {...args} />;

export const Footer = TemplateSidebarFooter.bind({});
Footer.displayName = 'Sidebar Footer';
Footer.args = {
  title: 'Invite new groupmates',
  text: 'Fancy companion text',
  button: {
    logo: 'openlytics',
    label: 'Invite to Openlytics',
  },
};
