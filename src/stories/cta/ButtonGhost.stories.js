import React from 'react';
import { action } from '@storybook/addon-actions';

import { withPadding } from '@utils/decorators';
import Button from '@studio/components/button';

export default {
  title: 'CTA/Button/Ghost',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    small: { control: 'boolean' },
    variant: { control: 'select' },
    type: { control: 'select' },
    label: { control: 'text' },
    icon: { control: 'text' },
  },
  decorators: [(story) => withPadding(story)],
  parameters: {
    backgrounds: { default: 'dark' },
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

export const Ghost = Template.bind({});
Ghost.storyName = 'Default';
Ghost.args = {
  onClick: action('onClick'),
  label: 'Button',
  icon: 'Node',
  variant: 'ghost',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Ghost.args,
  disabled: true,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  ...Ghost.args,
  icon: null,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  ...Ghost.args,
  label: null,
};
