import React from 'react';
import { action } from '@storybook/addon-actions';

import { withPadding } from '@utils/decorators';
import { getAllIcons } from '@utils/stories/getAllIcons';
import Button from '@studio/components/button';

export default {
  title: 'CTA/Button/Dark',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    small: { control: 'boolean' },
    variant: { control: 'select' },
    type: { control: 'select' },
    label: { control: 'text' },
    icon: { control: 'select', options: getAllIcons() },
  },
  decorators: [(story) => withPadding(story)],
  parameters: {
    design: {
      type: 'figma',
      url: [
        'https://www.figma.com/file/u0jiotczkfgiFC5MKpYvhw/LIBRARY?node-id=2%3A7',
        'https://www.figma.com/file/u0jiotczkfgiFC5MKpYvhw/LIBRARY?node-id=231%3A210',
      ],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Dark = Template.bind({});
Dark.storyName = 'Default';
Dark.args = {
  onClick: action('onClick'),
  label: 'Button',
  icon: 'Node',
  variant: 'dark',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Dark.args,
  disabled: true,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  ...Dark.args,
  icon: null,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  ...Dark.args,
  label: null,
};
