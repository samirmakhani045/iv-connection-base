import React from 'react';
import { render, screen } from '@testing-library/react';

import * as colors from '@studio/theme/colors';

import Icon from '../Icon';

const defaultProps = {
  name: 'Add',
};

const Test = (props) => <Icon {...defaultProps} {...props} />;

describe('<Icon />', () => {
  it('should render correctly', () => {
    const { container } = render(<Test />);

    expect(screen.queryByTestId('wrapper')).toBeInTheDocument();
    expect(screen.queryByTestId('icon')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render if icon does not exist', () => {
    render(<Test name="ThisIconDoesNotExist" />);

    expect(screen.queryByTestId('wrapper')).not.toBeInTheDocument();
  });

  it('should render a different icon, bigger and red', () => {
    const { container } = render(<Test name="Arrow" size={60} color={colors.red} />);

    expect(screen.queryByTestId('wrapper')).toBeInTheDocument();
    expect(screen.queryByTestId('icon')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
