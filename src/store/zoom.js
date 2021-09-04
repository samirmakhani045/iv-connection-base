import { createSlice } from '@reduxjs/toolkit';
import constants from '@utils/constants';

const moveZoomSlot = (zoom, indexOffset) => {
  const zoomSelectionList = constants.ZOOM_SELECTION_LIST;

  let oldIndex = zoomSelectionList.indexOf(zoom.zoomSelection);

  if (oldIndex < 1) {
    let level = zoom.zoomLevel;
    if (level > 100) {
      oldIndex = zoomSelectionList.indexOf('200%');
    } else {
      level = Math.round(level / 25) * 25;
      oldIndex = zoomSelectionList.indexOf(`${level}%`);
      if (oldIndex === -1) {
        oldIndex = zoomSelectionList.indexOf('100%');
      }
    }
  }

  const index = oldIndex + indexOffset;
  if (index < 1 || index >= zoomSelectionList.length - 1) return;

  zoom.zoomSelection = zoomSelectionList[index];
};

// Reducers
const slice = createSlice({
  name: 'zoom',
  initialState: {
    initial: true,
    loading: false,
    zoom: {
      zoomLevel: 100,
      zoomSelection: 'Zoom to fit',
      zoomAnchor: 'center', // can be "cursor"|"center"
    },
  },
  reducers: {
    zoomUpdatedLocally: (store, { payload: zoom }) => {
      store.zoom = zoom;
      store.loading = false;
      store.added = true;
    },
    // ----------------------------------------------------------- keyboard/mouse/input events - start
    zoomNextSlot: (store, { payload: _ }) => {
      moveZoomSlot(store.zoom, 1);
    },

    zoomPreviousSlot: (store, { payload: _ }) => {
      moveZoomSlot(store.zoom, -1);
    },

    zoomSet: (store, { payload: value }) => {
      let { zoom } = store;
      zoom.zoomSelection = value;
      zoom.deltaX = 0;
      zoom.deltaY = 0;
    },
    // ----------------------------------------------------------- keyboard/mouse/input events - end

    // ----------------------------------------------------------- keyboard/mouse/input events - start
    flowKeyDownRegardingZoom: (store, { payload: e }) => {
      let { zoom } = store;
      if (e.which === constants.ZOOM_OUT_KEY) {
        zoom.zoomLevel -= 1;
        if (zoom.zoomLevel < constants.ZOOM_MIN) zoom.zoomLevel = constants.ZOOM_MIN;
        zoom.zoomSelection = 'Custom';
      } else if (e.which === constants.ZOOM_IN_KEY || e.which === constants.ZOOM_IN_KEY_2) {
        zoom.zoomLevel += 1;
        if (zoom.zoomLevel > constants.ZOOM_MAX) zoom.zoomLevel = constants.ZOOM_MAX;
        zoom.zoomSelection = 'Custom';
      }
    },

    boardWheelActionRegardingZoom: (store, { payload: { metaKey, deltaY, deltaX, loc } }) => {
      if (!metaKey) return;
      // pressing windows/command key

      let level = store.zoom.zoomLevel + deltaY;
      if (level < constants.ZOOM_MIN) level = constants.ZOOM_MIN;
      if (level > constants.ZOOM_MAX) level = constants.ZOOM_MAX;

      store.zoom.zoomAnchor = 'cursor';
      store.cursorX = loc.x;
      store.cursorY = loc.y;

      store.zoom.zoomLevel = level;
      store.zoom.zoomSelection = 'Custom';
    },
    // ----------------------------------------------------------- keyboard/mouse/input events - end
  },
});

// ===================================================== events

export const updateZoomLocally = slice.actions.zoomUpdatedLocally;

export const zoomNextSlot = slice.actions.zoomNextSlot;
export const zoomPreviousSlot = slice.actions.zoomPreviousSlot;
export const zoomSet = slice.actions.zoomSet;
export const flowKeyDownRegardingZoom = slice.actions.flowKeyDownRegardingZoom;
export const boardWheelActionRegardingZoom = slice.actions.boardWheelActionRegardingZoom;

// ===================================================== apis

export default slice.reducer;
