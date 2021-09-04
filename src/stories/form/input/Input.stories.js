import React from 'react';

import { withPadding } from '@utils/decorators';
import { getAllIcons } from '@utils/stories/getAllIcons';
import Input from '@studio/components/input';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    type: { control: 'select' },
    icon: { control: 'select', options: getAllIcons() },
  },
  decorators: [(story) => withPadding(story)],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/u0jiotczkfgiFC5MKpYvhw/LIBRARY?node-id=94%3A271',
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'story',
  disabled: false,
  label: 'Label',
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  value: 'Value',
};

export const WithError = Template.bind({});
WithError.args = {
  ...Filled.args,
  error: 'This is an error',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: 'Search',
};

export const WithIconFilled = Template.bind({});
WithIconFilled.args = {
  ...WithIcon.args,
  value: 'Value',
};

export const WithIconWithError = Template.bind({});
WithIconWithError.args = {
  ...WithIconFilled.args,
  error: 'This is an error',
};
