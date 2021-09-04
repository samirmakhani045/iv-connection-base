import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTranslation } from '@utils/decorators';

import DashboardHeader from '../DashboardHeader';

const defaultProps = {
  title: 'Title',
};

const Test = (props) => withTranslation(() => <DashboardHeader {...defaultProps} {...props} />);

describe('<DashboardHeader />', () => {
  it('should render correctly', () => {
    const { container } = render(<Test />);

    expect(screen.queryByTestId('wrapper')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
