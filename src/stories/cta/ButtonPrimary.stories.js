import React from 'react';
import { action } from '@storybook/addon-actions';

import { withPadding } from '@utils/decorators';
import Button from '@studio/components/button';

export default {
  title: 'CTA/Button/Primary',
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

export const Primary = Template.bind({});
Primary.storyName = 'Default';
Primary.args = {
  onClick: action('onClick'),
  label: 'Button',
  icon: 'Node',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  ...Primary.args,
  icon: null,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  ...Primary.args,
  label: null,
};
