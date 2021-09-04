import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Toggle from '../Toggle';

const defaultProps = {
  checked: true,
  disabled: false,
};

const Test = (props) => <Toggle {...defaultProps} {...props} />;

describe('<Toggle />', () => {
  it('should render correctly', () => {
    const { container } = render(<Test />);

    expect(screen.queryByTestId('toggle')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a disabled toggle', () => {
    const { container } = render(<Test disabled />);

    expect(screen.queryByTestId('toggle')).toBeDisabled();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a checked toggle', () => {
    const { container } = render(<Test />);

    expect(screen.queryByTestId('toggle')).toBeChecked();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a disabled and checked toggle', () => {
    const { container } = render(<Test disabled />);

    expect(screen.queryByTestId('toggle')).toBeDisabled();
    expect(screen.queryByTestId('toggle')).toBeChecked();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should fire onClick if toggle has callback', () => {
    const onClick = jest.fn();
    render(<Test onClick={onClick} />);

    const toggle = screen.queryByTestId('toggle');

    userEvent.click(toggle);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not fire onClick if toggle is disabled', () => {
    const onClick = jest.fn();
    render(<Test onClick={onClick} disabled />);

    const toggle = screen.queryByTestId('toggle');

    userEvent.click(toggle);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
