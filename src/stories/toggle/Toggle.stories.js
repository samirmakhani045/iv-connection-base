import React, { useState } from 'react';

import { withPadding } from '@utils/decorators';
import Toggle from '@studio/components/toggle';

export default {
  title: 'Form/Toggle',
  component: Toggle,
  argTypes: {},
  decorators: [(story) => withPadding(story)],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/u0jiotczkfgiFC5MKpYvhw/LIBRARY?node-id=276%3A307',
    },
  },
};

const Template = (args) => <Toggle {...args} />;
const IteractiveTemplate = (args) => {
  const [isChecked, setIsChecked] = useState(false);

  return <Toggle {...args} checked={isChecked} onClick={setIsChecked} />;
};

export const On = Template.bind({});
On.args = {
  checked: true,
  onClick: () => {},
};

export const Off = Template.bind({});
Off.args = {
  checked: false,
  onClick: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: true,
  disabled: true,
  onClick: () => {},
};

export const Clickable = IteractiveTemplate.bind({});
Clickable.args = {};
