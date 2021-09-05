import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from '@studio/hooks/useTranslation';

import Button from '../components/button/Button';

const FooterLayout = ({ backStep, forwardStep, isShowSuccess }) => {
  const { t } = useTranslation('common.forms');

  return (
    <>
      <Button variant="light" onClick={backStep} label={t('labels.back')} />
      <Button
        variant="dark"
        disabled={isShowSuccess}
        onClick={forwardStep}
        label={t('labels.next')}
      />
    </>
  );
};

FooterLayout.propTypes = {
  backStep: PropTypes.func.isRequired,
  forwardStep: PropTypes.func.isRequired,
  isShowSuccess: PropTypes.bool,
};

export default FooterLayout;
