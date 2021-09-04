import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent, { specialChars } from '@testing-library/user-event';

import Input from '../Input';

const defaultProps = {
  id: 'test',
  label: 'Label',
};

const Test = (props) => <Input {...defaultProps} {...props} />;

describe('<Input />', () => {
  it('should render correctly', () => {
    const { container } = render(<Test />);

    expect(screen.queryByTestId('wrapper')).toBeInTheDocument();
    expect(screen.queryByTestId('input')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a label, value and icon', () => {
    const { container } = render(<Test value="test" icon="Search" />);

    expect(screen.queryByTestId('inputLabel')).toBeInTheDocument();
    expect(screen.queryByTestId('inputIcon')).toBeInTheDocument();
    expect(screen.queryByTestId('input')).toHaveValue('test');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should handle a value change', () => {
    render(<Test value="this is a test" />);

    const input = screen.queryByTestId('input');

    input.setSelectionRange(10, 14);
    userEvent.type(input, `${specialChars.backspace}test1`);
    expect(input).toHaveValue('this is a test1');
  });

  it('should render a disabled input', () => {
    render(<Test value="test" disabled />);

    const input = screen.queryByTestId('input');

    userEvent.type(input, 'test1');
    expect(input).toHaveValue('test');
    expect(input).toHaveProperty('disabled');
  });

  it('should render a required input', () => {
    render(<Test required />);

    expect(screen.queryByTestId('input')).toHaveProperty('required');
  });

  it('should display an error message', () => {
    const { container } = render(<Test error="Error" />);

    expect(screen.queryByTestId('inputError')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
