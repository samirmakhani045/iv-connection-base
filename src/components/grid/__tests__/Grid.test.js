import React from 'react';
import { render, screen } from '@testing-library/react';

import Grid from '../Grid';

const Test = (props) => <Grid {...props} />;

describe('<Grid />', () => {
  it('should render correctly', () => {
    const { container } = render(<Test />);

    expect(screen.queryByTestId('grid')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support changing content alignment, number of columns, gap, gutter and width', () => {
    const { container } = render(
      <Test align="right" columns={8} gap="1rem" gutter="1rem" width="100rem" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support configuration on different breakpoints', () => {
    const GRID_CONFIG = {
      xs: {
        columns: 4,
        gap: '1rem',
      },
      md: {
        columns: 12,
        gap: '3rem',
      },
    };
    const { container } = render(<Test {...GRID_CONFIG} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
