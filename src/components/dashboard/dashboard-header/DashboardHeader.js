import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from '@studio/hooks/useTranslation';

import { Wrapper, H1, StyledButton } from './DashboardHeader.styles';

const DashboardHeader = (props) => {
  const { title, onCreateFlow } = props;
  const { t } = useTranslation('pages.dashboard');

  return (
    <Wrapper data-testid="wrapper">
      <H1>{title}</H1>

      {onCreateFlow && (
        <StyledButton
          label={t('menu.create')}
          icon="Add"
          variant="light"
          onClick={onCreateFlow}
          small
        />
      )}
    </Wrapper>
  );
};

DashboardHeader.propTypes = {
  /** Title to give context to user on dashboard */
  title: PropTypes.string,
  /** Callback to create flow. Hide create flow button if undefined */
  onCreateFlow: PropTypes.func,
};

export default DashboardHeader;
