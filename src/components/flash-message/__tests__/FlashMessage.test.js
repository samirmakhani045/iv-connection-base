import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTranslation } from '@utils/decorators';

import FlashMessage from '../FlashMessage';

const defaultProps = {
  label: 'Message',
};

const Test = (props) => withTranslation(() => <FlashMessage {...defaultProps} {...props} />);

describe('<FlashMessage />', () => {
  it('should render correctly', () => {
    const { container } = render(<Test />);

    expect(screen.queryByTestId('wrapper')).toBeInTheDocument();
    expect(screen.queryByTestId('label')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a flash message with variant: positive', () => {
    const { container } = render(<Test variant="positive" />);

    expect(screen.queryByTestId('wrapper')).toBeInTheDocument();
    expect(screen.queryByTestId('label')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a flash message with variant: alert', () => {
    const { container } = render(<Test variant="alert" />);

    expect(screen.queryByTestId('wrapper')).toBeInTheDocument();
    expect(screen.queryByTestId('label')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a flash message with a cta', () => {
    const { container } = render(<Test withAction />);

    expect(screen.queryByTestId('wrapper')).toBeInTheDocument();
    expect(screen.queryByTestId('label')).toBeInTheDocument();
    expect(screen.queryByTestId('button')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
