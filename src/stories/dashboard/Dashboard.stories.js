import React from 'react';
import { action } from '@storybook/addon-actions';

import { withTranslation } from '@utils/decorators';
import { Dashboard } from '@studio/pages';

import { data } from './data.mock';

export default {
  title: 'Dashboard/Page',
  component: Dashboard,
  argTypes: {},
  decorators: [(story) => withTranslation(story)],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/dsCf9BIDSdbztW6vt125jw/Openlytics---MASTER?node-id=1993%3A62156',
    },
  },
};

const Template = (args) => <Dashboard {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: data,
  onInvite: action('onInvite'),
  onCreateFlow: action('onCreateFlow'),
};
