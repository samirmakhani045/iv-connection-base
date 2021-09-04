import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withTranslation } from '@utils/decorators';
import { options } from '@stories/form/dropdown/data.mock';

import Dropdown from '../Dropdown';

const defaultProps = {
  disabled: false,
  multiselect: false,
  withIcon: true,
  withError: false,
  options,
};

const Test = (props) => withTranslation(() => <Dropdown {...defaultProps} {...props} />);

describe('<Dropdown />', () => {
  it('should render correctly', () => {
    const { container } = render(<Test />);

    expect(screen.queryByTestId('dropdown')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a disabled dropdown', () => {
    const { container } = render(<Test disabled />);

    expect(screen.queryByTestId('dropdownIndicatorsContainerDisabled')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a dropdown with error', () => {
    const { container } = render(<Test withError />);

    expect(screen.queryByTestId('dropdown')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a dropdown with icons', () => {
    render(<Test withIcon />);

    expect(screen.queryByTestId('dropdownValueContainerIcon')).toBeInTheDocument();
  });

  it('should fire onChange if dropdown has callback', async () => {
    const onChange = jest.fn();
    render(<Test onChange={onChange} />);

    const dropdown = screen.queryByTestId('dropdown');
    expect(dropdown).toBeDefined();
    expect(onChange).toHaveBeenCalledTimes(0);

    fireEvent.keyDown(dropdown.firstChild, { key: 'ArrowDown' });
    await screen.findByText(options[0].label);
    userEvent.click(screen.getByText(options[0].label));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(options[0]);
  });

  it('should select multiple options', async () => {
    const onChange = jest.fn();
    render(<Test onChange={onChange} />);

    const dropdown = screen.queryByTestId('dropdown');
    expect(dropdown).toBeDefined();
    expect(onChange).toHaveBeenCalledTimes(0);

    fireEvent.keyDown(dropdown.firstChild, { key: 'ArrowDown' });
    await screen.findByText(options[0].label);
    userEvent.click(screen.getByText(options[0].label));

    fireEvent.keyDown(dropdown.firstChild, { key: 'ArrowDown' });
    await screen.findByText(options[1].label);
    userEvent.click(screen.getByText(options[1].label));

    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
