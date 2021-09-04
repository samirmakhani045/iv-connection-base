import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton, Title, P } from './SidebarFooter.styles';

const SidebarFooter = (props) => {
  const { title, text, button } = props;

  return (
    <div data-testid="wrapper">
      {title && <Title>{title}</Title>}
      {text && <P>{text}</P>}
      <StyledButton variant="light" {...button} />
    </div>
  );
};

SidebarFooter.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.string,
    logo: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

export default SidebarFooter;
