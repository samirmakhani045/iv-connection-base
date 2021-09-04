import React from 'react';

import { withPadding } from '@utils/decorators';

import Typography from './Typography';

export default {
  title: 'Library/Typography',
  component: Typography,
  decorators: [(story) => withPadding(story)],
};

export const Default = () => <Typography />;
