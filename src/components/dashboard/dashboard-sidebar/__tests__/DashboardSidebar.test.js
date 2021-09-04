import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTranslation } from '@utils/decorators';

import DashboardSidebar from '../DashboardSidebar';

const Test = (props) => withTranslation(() => <DashboardSidebar {...props} />);

describe('<DashboardSidebar />', () => {
  it('should render correctly', () => {
    const { container } = render(<Test />);

    expect(screen.queryByTestId('dashboardSidebarWrapper')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
