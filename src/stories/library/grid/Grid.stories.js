import React from 'react';

import { withGridOverlay, withPadding } from '@utils/decorators';
import { Grid } from '@studio/components/grid';

import Breakpoints from './Breakpoints';

export default {
  title: 'Library/Grid',
  component: Grid,
  decorators: [(story) => withPadding(story), (story, props) => withGridOverlay(story, props)],
  argTypes: {
    gridOverlay: { control: 'boolean' },
  },
};

const Template = (args) => <Breakpoints {...args} />;

export const Default = Template.bind({});
Default.args = {};
