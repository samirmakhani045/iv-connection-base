import React from 'react';

import { withPadding } from '@utils/decorators';
import { getAllIcons } from '@utils/stories/getAllIcons';
import * as colors from '@studio/theme/colors';
import { Icon } from '@studio/components/icons';

export default {
  title: 'Library/Icons',
  component: Icon,
  argTypes: {
    name: { control: 'select', options: getAllIcons() },
    size: { control: { type: 'range', min: 1, max: 100, step: 1 } },
    color: { control: 'color' },
  },
  decorators: [(story) => withPadding(story)],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/u0jiotczkfgiFC5MKpYvhw/LIBRARY?node-id=94%3A100',
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const IconWrapper = Template.bind({});
IconWrapper.args = {
  name: 'Add',
  size: 40,
  color: colors.textPrimary,
};
