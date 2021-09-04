import React from 'react';

import { withPadding } from '@utils/decorators';
import Skeleton from '@studio/components/skeleton';

export default {
  title: 'Loaders/Skeleton',
  component: Skeleton,
  decorators: [(story) => withPadding(story)],
  argTypes: {
    lines: { control: { type: 'range', min: 1, max: 20, step: 1 } },
    spacing: { control: { type: 'range', min: 0, max: 50, step: 1 } },
    height: { control: { type: 'range', min: 1, max: 50, step: 1 } },
  },
};

const Template = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {};
