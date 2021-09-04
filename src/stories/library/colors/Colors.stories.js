import React from 'react';

import { withPadding } from '@utils/decorators';

import Colors from './Colors';

export default {
  title: 'Library/Colors',
  component: Colors,
  decorators: [(story) => withPadding(story)],
};

export const Default = () => <Colors />;
