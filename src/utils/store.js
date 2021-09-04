import cloneDeep from 'lodash/cloneDeep';
import { connect } from 'react-redux';

import {
  updateFlow,
  updateFlowLocally,
  fetchFlows,
  fetchFlow,
  connectToFlowMessages,
} from '@studio/store/flow';
import { fetchTables } from '@studio/store/table';
import { fetchElements, fetchElement } from '@studio/store/element';
import { fetchRows } from '@studio/store/row';
import { fetchConnector } from '@studio/store/connector';

export const mapCommonStates = (TargetComponent) => {
  const mapGlobalStateToProps = (state) => ({
    appState: state.appSlice,
    flowState: state.flowSlice,
    tableState: state.tableSlice,
    elementState: state.elementSlice,
    rowState: state.rowSlice,
    connectorState: state.connectorSlice,
  });

  const mapGlobalDispatchToProps = (dispatch) => ({
    fetchFlows: (payload) => dispatch(fetchFlows(payload)),
    fetchFlow: (payload) => dispatch(fetchFlow(payload)),
    connectToFlowMessages: (payload) => dispatch(connectToFlowMessages(payload)),
    updateFlow: (payload) => dispatch(updateFlow(payload)),
    updateFlowLocally: (payload) => dispatch(updateFlowLocally(payload)),
    fetchElements: (payload) => dispatch(fetchElements(payload)),
    fetchElement: (payload) => dispatch(fetchElement(payload)),
    fetchTables: (payload) => dispatch(fetchTables(payload)),
    fetchRows: (payload) => dispatch(fetchRows(payload)),
    fetchConnector: (payload) => dispatch(fetchConnector(payload)),
  });

  return connect(mapGlobalStateToProps, mapGlobalDispatchToProps)(TargetComponent);
};

export const modifyObjectWith = (currentValue, setterFn, processorFn) => {
  let value = cloneDeep(currentValue);
  processorFn(value);
  setterFn(value);
};
