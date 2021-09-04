import React from 'react';
import { render, screen } from '@testing-library/react';

import { withStore } from '@utils/decorators';
import { menuOptions } from '@studio/components/dashboard/dashboard-sidebar/config';

import SidebarMenu from '../SidebarMenu';

const defaultProps = {
  data: menuOptions,
};

const Test = (props) => withStore(() => <SidebarMenu {...defaultProps} {...props} />);

describe('<SidebarMenu />', () => {
  it('should render correctly', () => {
    const { container } = render(<Test />);

    expect(screen.queryByTestId('menuWrapper')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
