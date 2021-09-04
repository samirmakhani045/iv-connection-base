import React from 'react';

import { withPadding } from '@utils/decorators';

import Icons from './Icons';

export default {
  title: 'Library/Icons',
  component: Icons,
  decorators: [(story) => withPadding(story)],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/u0jiotczkfgiFC5MKpYvhw/LIBRARY?node-id=94%3A100',
    },
  },
};

export const Default = () => <Icons />;
