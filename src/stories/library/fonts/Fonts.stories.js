import React from 'react';

import { withPadding } from '@utils/decorators';

import Fonts from './Fonts';

export default {
  title: 'Library/Fonts',
  component: Fonts,
  decorators: [(story) => withPadding(story)],
};

export const Default = () => <Fonts />;
