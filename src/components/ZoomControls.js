import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { mapCommonStates, modifyObjectWith } from '@utils/store';
import { useTranslation } from '@studio/hooks/useTranslation';
import Dropdown from '@studio/components/dropdown';
import Button from '@studio/components/button';

// const useStyles = makeStyles({
//   root: {
//     width: 200,
//   },
//   formControl: {
//     margin: 10,
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: 10,
//   },
// });

const ZoomControls = ({ flowState, updateFlowLocally }) => {
  const { t } = useTranslation('components.zoomControls');

  const { flow } = flowState;

  var zoomLevelList = [25, 50, 75, 100, 200];

  const [localFlow, setLocalFlow] = useState(flow);

  useEffect(() => {
    if (flow) setLocalFlow(flow);
  }, [flow]);

  const alterZoomLevel = (amount) => {
    let indexOffset = amount / Math.abs(amount);
    let index = zoomLevelList.indexOf(localFlow.zoomLevel) + indexOffset;
    if (0 > index || index >= zoomLevelList.length) return;

    modifyObjectWith(localFlow, updateFlowLocally, (flow) => {
      flow.zoomLevel = zoomLevelList[index];
    });
  };

  const handleChange = (event) => {
    modifyObjectWith(localFlow, updateFlowLocally, (flow) => {
      flow.zoomLevel = event.value;
    });
  };

  if (!localFlow || localFlow.id == null) return <div>{t('loading')}</div>;

  // TODO: improve visual controls
  return (
    <div>
      <Button aria-label={t('zoomOut')} icon="Remove" small onClick={() => alterZoomLevel(-25)} />
      <Dropdown
        id="demo-simple-select"
        value={localFlow.zoomLevel}
        onChange={handleChange}
        options={zoomLevelList.map((zoomLevel) => ({
          value: zoomLevel,
          label: `${zoomLevel}%`,
        }))}
      />
      {/* <span>{localFlow.zoomLevel}%</span> */}
      <Button aria-label={t('zoomIn')} icon="Add" small onClick={() => alterZoomLevel(25)} />
    </div>
  );
};

ZoomControls.propTypes = {
  flowState: PropTypes.shape({
    flow: PropTypes.object,
  }),
  updateFlowLocally: PropTypes.func,
};

export default mapCommonStates(ZoomControls);
