/* eslint-disable no-unused-vars */
import { v4 as uuid } from 'uuid';
import { WebSocket, Server } from 'mock-socket';

import { getMessagesUrl } from '@studio/utils/url.js';

import getTables from './responses/getTables.json';
import getElementsA from './responses/flowA/getElements.json';
import getElementA from './responses/flowA/getElement.json';
import getElementsB from './responses/flowB/getElements.json';
import getElementB from './responses/flowB/getElement.json';
import getElementsC from './responses/flowC/getElements.json';
import putFlowA from './responses/flowA/putFlow.json';
import putFlowB from './responses/flowB/putFlow.json';
import putFlowC from './responses/flowC/putFlow.json';

const responses = {
  a: {
    getElements: getElementsA,
    getElement: getElementA,
    putFlow: putFlowA,
  },
  b: {
    getElements: getElementsB,
    getElement: getElementB,
    putFlow: putFlowB,
  },
  c: {
    getElements: getElementsC,
    putFlow: putFlowC,
  },
};

// delay of response, in milliseconds
// var responseDelay = 400
const responseDelay = 2000;

const onConnection = (socket, flowId) => {
  socket.on('close', () => {
    socket.close();
  });

  socket.on('message', (data) => {
    const request = JSON.parse(data);
    const time = new Date().getTime();

    let response = {
      name: `${request.name}Response`,
      id: uuid(),
      requestId: request.id,
      time,
    };

    switch (request.name) {
      case 'getTables':
        // TODO: add pagination functionality
        response.payload = getTables;
        break;
      case 'getElements':
        response.payload = responses[flowId].getElements;
        break;
      case 'getElement':
        {
          const { id, elementRows } = request.payload;
          response.payload = responses[flowId].getElement[id];

          // TODO: Currently partial support to request elementRows with the element
          if (!elementRows || !elementRows.length) {
            response.payload.elementRows = [];
          }
        }
        break;
      case 'getRows':
        {
          response.payload = request.payload.map(({ elementId, portId, page, pageSize }) => {
            let elementRow = responses[flowId].getElement[elementId].elementRows.find(
              (elementRow) => elementRow.portId === portId,
            );

            elementRow.page = page;
            elementRow.pageSize = pageSize;
            elementRow.objects.slice((page - 1) * pageSize, pageSize);

            return elementRow;
          });
        }
        break;
      case 'putFlow':
        response.payload = responses[flowId].putFlow;
        break;
    }

    setTimeout(() => {
      // send websocket response
      socket.send(JSON.stringify(response));
      // print to console
      console.groupCollapsed(`Mock socket: ${request.name}`);
      console.log('Request', request);
      console.log('Response', response);
      console.groupEnd();
    }, responseDelay);
  });
};

export function startWebsocketServers() {
  window.WebSocket = WebSocket;

  const serverFlowA = new Server(getMessagesUrl('a'));
  serverFlowA.on('connection', (socket) => onConnection(socket, 'a'));

  const serverFlowB = new Server(getMessagesUrl('b'));
  serverFlowB.on('connection', (socket) => onConnection(socket, 'b'));

  const serverFlowC = new Server(getMessagesUrl('c'));
  serverFlowC.on('connection', (socket) => onConnection(socket, 'c'));
}
