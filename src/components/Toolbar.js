import React from 'react';
import PropTypes from 'prop-types';

import { mapCommonStates } from '@studio/utils/store';

import ZoomControls from './ZoomControls';
import styles from './Toolbar.module.css';

const Toolbar = (props) => {
  const { flow } = props.flowState;

  return (
    <div className={styles.toolbar}>
      <div className={styles.leftCol}>
        <h1 className={styles.title}>Flow: {flow.title}</h1>
      </div>

      <div className={styles.rightCol}>
        <ZoomControls className={styles.controls} />
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  flowState: PropTypes.shape({
    flow: PropTypes.object,
  }),
};

export default mapCommonStates(Toolbar);
