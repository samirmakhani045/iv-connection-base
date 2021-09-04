import React from 'react';

import { withPadding, withTranslation } from '@utils/decorators';
import FlashMessage from '@studio/components/flash-message';

export default {
  title: 'Form/FlashMessage',
  component: FlashMessage,
  argTypes: {
    variant: { control: 'select' },
    label: { control: 'text' },
  },
  decorators: [(story) => withTranslation(story), (story) => withPadding(story)],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/u0jiotczkfgiFC5MKpYvhw/LIBRARY?node-id=104%3A416',
    },
  },
};

const Template = (args) => <FlashMessage {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  label: 'Message',
  variant: 'default',
};

export const WithAction = Template.bind({});
WithAction.args = {
  ...Default.args,
  withAction: true,
};

export const Positive = Template.bind({});
Positive.args = {
  label: 'Message',
  variant: 'positive',
};

export const Alert = Template.bind({});
Alert.args = {
  label: 'Message',
  variant: 'alert',
};
