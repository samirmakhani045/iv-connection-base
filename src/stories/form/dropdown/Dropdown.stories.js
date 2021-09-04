import React from 'react';
import { action } from '@storybook/addon-actions';

import { withPadding, withTranslation } from '@utils/decorators';
import Dropdown from '@studio/components/dropdown';

import { options } from './data.mock';

export default {
  title: 'Form/Dropdown',
  component: Dropdown,
  argTypes: {},
  decorators: [(story) => withTranslation(story), (story) => withPadding(story)],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/u0jiotczkfgiFC5MKpYvhw/LIBRARY?node-id=266%3A254',
    },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options,
  onChange: action('onChange'),
};
