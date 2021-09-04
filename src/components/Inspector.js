import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TextField from '@material-ui/core/TextField';
// import TableRow from '@material-ui/core/TableRow';
// import { TablePagination, withStyles } from '@material-ui/core';

import { mapCommonStates } from '@studio/utils/store';
import { getFlowIdFromUrl } from '@studio/utils/url';
import { useTranslation } from '@studio/hooks/useTranslation';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   output: {
//     marginBottom: '6px',
//     textAlign: 'center',
//   },
// }));

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

const Inspector = ({ appState, flowState, elementState, fetchElement }) => {
  const { t } = useTranslation('components.loading');

  const { isLoading } = appState;
  const { flow } = flowState;
  const { elements, element } = elementState;

  // const classes = useStyles();

  let flowId = getFlowIdFromUrl(useParams());
  const [localFlow, setLocalFlow] = useState(flow);
  const [selectedElement, setSelectedElement] = useState(element);
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(100);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  useEffect(() => {
    if (!flow || !elements.length) return;

    setLocalFlow(flow);

    if (flow.selectedElementIndex > -1 && elements.length) {
      const selectedElementByIndex = elements[flow.selectedElementIndex];
      setSelectedElement(selectedElementByIndex);

      if (!element || selectedElementByIndex.id !== element.id) {
        fetchElement({ id: selectedElementByIndex.id });
      }
    } else {
      setSelectedElement(null);
    }
  }, [flowId, flow, element, elements, fetchElement]);

  // fallback rendered view
  if (!localFlow || !elements.length || isLoading)
    return <div className="inspection-view inspection-empty">{t('loading')}</div>;

  if (!selectedElement || !element || (selectedElement.id !== element.id && !isLoading)) {
    return <div className="inspection-view inspection-empty">Select any component to inspect.</div>;
  }

  // TODO: commenting this old code until the new Table component is functional
  return <div className="inspection-view inspection-empty">Select any component to inspect.</div>;

  // let inspectorBody = [];
  // let elementData = element.data; // TODO: This errors atm. Expected different data format. Need to catch up about it!
  // let containerStyle = {
  //   height: 'calc(50vh - 44px - 10px - 30px)',
  // };
  // const makeTable = (o) => {
  //   return (
  //     <>
  //       <TableContainer style={containerStyle}>
  //         <Table stickyHeader size="small" aria-label="a dense table" className="open-table">
  //           <TableHead>
  //             <TableRow>
  //               {o.schema.map((head, index) => (
  //                 <TableCell
  //                   component="th"
  //                   scope="row"
  //                   key={head.label + index + Date.now() + Math.random()}
  //                 >
  //                   {head.label}
  //                 </TableCell>
  //               ))}
  //             </TableRow>
  //           </TableHead>
  //           <TableBody>
  //             {o.rows
  //               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  //               .map((row, index) => (
  //                 <StyledTableRow key={index}>
  //                   {row.map((head) => (
  //                     <TableCell component="th" scope="row" key={head + Date.now() + Math.random()}>
  //                       {head}
  //                     </TableCell>
  //                   ))}
  //                 </StyledTableRow>
  //               ))}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>
  //       <TablePagination
  //         rowsPerPageOptions={[100]}
  //         component="div"
  //         count={o.rows.length}
  //         rowsPerPage={rowsPerPage}
  //         page={page}
  //         onChangePage={handleChangePage}
  //         onChangeRowsPerPage={handleChangeRowsPerPage}
  //       />
  //     </>
  //   );
  // };

  // if (selectedElement.type === 'source') {
  //   let importS3 = (
  //     <div className="open-import-info">
  //       <p>Import table from S3 file:</p>
  //       <TextField
  //         className="open-disable-input"
  //         margin="dense"
  //         disabled
  //         id="outlined-basic"
  //         variant="outlined"
  //         size="small"
  //         value="databucket/.json"
  //       />
  //     </div>
  //   );

  //   let table = makeTable(elementData.o);

  //   let wrapper = (
  //     <div className="open-inspection-item" key={element.id}>
  //       <div className="open-tr-box" style={{ width: '300px', marginRight: '20px' }}>
  //         <div className={classes.output}>S3 SOURCE</div>
  //         {importS3}
  //       </div>
  //       <div className="open-tr-box" style={{ flex: 1 }}>
  //         <div className={classes.output}>OUTPUT</div>
  //         {table}
  //       </div>
  //     </div>
  //   );

  //   inspectorBody.push(wrapper);
  // } else if (selectedElement.type === 'join') {
  //   let iL = makeTable(elementData.iL.node.data[elementData.iL.ref.portId]);
  //   let iR = makeTable(elementData.iR.node.data[elementData.iR.ref.portId]);
  //   let oJ = makeTable(elementData.oJ);

  //   let wrapper = (
  //     <div className="open-inspection-item" key={element.id}>
  //       <div className="open-tr-box" style={{ flex: 1, marginRight: '20px' }}>
  //         <div className={classes.output}>Input Left</div>
  //         {iL}
  //       </div>

  //       <div className="open-tr-box" style={{ flex: 1, marginRight: '20px' }}>
  //         <div className={classes.output}>Input Right</div>
  //         {iR}
  //       </div>

  //       <div className="open-tr-box" style={{ flex: 2 }}>
  //         <div className={classes.output}>Output</div>
  //         {oJ}
  //       </div>
  //     </div>
  //   );

  //   inspectorBody.push(wrapper);
  // } else if (selectedElement.type === 'formula') {
  //   let i = makeTable(elementData.i.node.data[elementData.i.ref.portId]);
  //   let o = makeTable(elementData.o);

  //   let wrapper = (
  //     <div className="open-inspection-item" key={element.id}>
  //       <div className="open-tr-box" style={{ flex: 1, marginRight: '20px' }}>
  //         <div className={classes.output}>Input</div>
  //         {i}
  //       </div>

  //       <div className="open-tr-box" style={{ flex: 1 }}>
  //         <div className={classes.output}>Output</div>
  //         {o}
  //       </div>
  //     </div>
  //   );

  //   inspectorBody.push(wrapper);
  // } else if (selectedElement.type === 'sort') {
  //   let i = makeTable(elementData.i.node.data[elementData.i.ref.portId]);
  //   let o = makeTable(elementData.o);

  //   let wrapper = (
  //     <div className="open-inspection-item" key={element.id}>
  //       <div className="open-tr-box" style={{ flex: 1, marginRight: '20px' }}>
  //         <div className={classes.output}>Input</div>
  //         {i}
  //       </div>

  //       <div className="open-tr-box" style={{ flex: 1 }}>
  //         <div className={classes.output}>Output</div>
  //         {o}
  //       </div>
  //     </div>
  //   );

  //   inspectorBody.push(wrapper);
  // } else if (selectedElement.type === 'limit') {
  //   let i = makeTable(elementData.i.node.data[elementData.i.ref.portId]);
  //   let o = makeTable(elementData.o);

  //   let wrapper = (
  //     <div className="open-inspection-item" key={element.id}>
  //       <div className="open-tr-box" style={{ flex: 1, marginRight: '20px' }}>
  //         <div className={classes.output}>Input</div>
  //         {i}
  //       </div>

  //       <div className="open-tr-box" style={{ flex: 1 }}>
  //         <div className={classes.output}>Output</div>
  //         {o}
  //       </div>
  //     </div>
  //   );

  //   inspectorBody.push(wrapper);
  // } else if (selectedElement.type === 'sink') {
  //   let i = makeTable(elementData.i.node.data[elementData.i.ref.portId]);

  //   let exportS3 = (
  //     <div className="open-import-info">
  //       <p>Export To S3 table from S3 file:</p>
  //       <TextField
  //         className="open-disable-input"
  //         margin="dense"
  //         disabled
  //         id="outlined-basic"
  //         variant="outlined"
  //         size="small"
  //         value=""
  //       />
  //     </div>
  //   );

  //   let wrapper = (
  //     <div className="open-inspection-item" key={element.id}>
  //       <div className="open-tr-box" style={{ flex: 1, marginRight: '20px' }}>
  //         <div className={classes.output}>Input Left</div>
  //         {i}
  //       </div>

  //       <div className="open-tr-box" style={{ width: '300px' }}>
  //         {exportS3}
  //       </div>
  //     </div>
  //   );

  //   inspectorBody.push(wrapper);
  // }

  // return <div className="inspection-view">{inspectorBody}</div>;
};

Inspector.propTypes = {
  flowState: PropTypes.shape({
    flow: PropTypes.object,
  }),
  elementState: PropTypes.shape({
    elements: PropTypes.array,
    element: PropTypes.object,
  }),
  appState: PropTypes.shape({
    isLoading: PropTypes.bool,
  }),
  fetchElement: PropTypes.func,
};

export default mapCommonStates(Inspector);
