import React from 'react';
import { render } from '@testing-library/react';

import { withTranslation } from '@utils/decorators';

import App from './App';

const Test = (props) => withTranslation(() => <App {...props} />);

describe('<App />', () => {
  it('should render correctly', () => {
    const { container } = render(<Test />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
