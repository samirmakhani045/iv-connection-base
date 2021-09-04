import React from 'react';
import { render, screen } from '@testing-library/react';

import SidebarFooter from '../SidebarFooter';

const defaultProps = {
  title: 'Title',
  text: 'Text',
  button: {
    label: 'Button',
    icon: 'Add',
  },
};

const Test = (props) => <SidebarFooter {...defaultProps} {...props} />;

describe('<SidebarFooter />', () => {
  it('should render correctly', () => {
    const { container } = render(<Test />);

    expect(screen.queryByTestId('wrapper')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
