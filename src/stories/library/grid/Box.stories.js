import React from 'react';
import styled from 'styled-components/macro';

import * as colors from '@studio/theme/colors';
import { withGridOverlay } from '@utils/decorators';
import { Grid, Box } from '@studio/components/grid';

const StyledBox = styled(Box)({
  backgroundColor: colors.cloud3,
  height: '20rem',
});

export default {
  title: 'Library/Box',
  component: Box,
  decorators: [(story, props) => withGridOverlay(story, props)],
  argTypes: {
    gridOverlay: { control: 'boolean' },
  },
};

const Template = (args) => (
  <Grid>
    <StyledBox {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  columns: 16,
};
