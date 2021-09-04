import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Button';

const defaultProps = {
  label: 'button',
  icon: 'Plus',
};

const Test = (props) => <Button {...defaultProps} {...props} />;

describe('<Button />', () => {
  it('should render correctly', () => {
    const { container } = render(<Test />);

    expect(screen.queryByTestId('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a button with variant: dark', () => {
    const { container } = render(<Test variant="dark" />);

    expect(screen.queryByTestId('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a button with variant: light', () => {
    const { container } = render(<Test variant="light" />);

    expect(screen.queryByTestId('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a small button', () => {
    const { container } = render(<Test small />);

    expect(screen.queryByTestId('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a disabled button', () => {
    const { container } = render(<Test disabled />);

    expect(screen.queryByTestId('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a disabled button with variant: dark', () => {
    const { container } = render(<Test disabled variant="dark" />);

    expect(screen.queryByTestId('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a disabled button with variant: light', () => {
    const { container } = render(<Test disabled variant="light" />);

    expect(screen.queryByTestId('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a disabled button with variant: ghost', () => {
    const { container } = render(<Test variant="ghost" />);

    expect(screen.queryByTestId('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render button with the icon on the right', () => {
    const { container } = render(<Test iconAlignRight />);

    expect(screen.queryByTestId('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render button without label and icon/icon that does not exist', () => {
    render(<Test label={null} icon="ThisIconDoesNotExist" />);

    expect(screen.queryByTestId('button')).not.toBeInTheDocument();
  });

  it('should render icon if it does exist', () => {
    render(<Test icon="Add" />);

    expect(screen.queryByTestId('buttonIcon')).toBeInTheDocument();
  });

  it('should fire onClick if button has callback', () => {
    const onClick = jest.fn();
    render(<Test onClick={onClick} />);

    const button = screen.queryByTestId('button');

    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not fire onClick if button has no callback', () => {
    const onClick = jest.fn();
    render(<Test />);

    const button = screen.queryByTestId('button');

    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should not fire onClick if button is disabled', () => {
    const onClick = jest.fn();
    render(<Test disabled onClick={onClick} />);

    const button = screen.queryByTestId('button');

    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
