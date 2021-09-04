import { createServer, Model } from 'miragejs';

import getConnections from './responses/getConnections.json';
import getConnectors from './responses/getConnectors.json';
import getGroups from './responses/getGroups.json';
import getFlows from './responses/getFlows.json';
import getElementsA from './responses/flowA/getElements.json';
import getElementsB from './responses/flowB/getElements.json';
import getElementsC from './responses/flowC/getElements.json';
import putFlowA from './responses/flowA/putFlow.json';
import putFlowB from './responses/flowB/putFlow.json';
import putFlowC from './responses/flowC/putFlow.json';

const responses = {
  a: {
    getElements: getElementsA,
    putFlow: putFlowA,
  },
  b: {
    getElements: getElementsB,
    putFlow: putFlowB,
  },
  c: {
    getElements: getElementsC,
    putFlow: putFlowC,
  },
};

export function startRestServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      flow: Model,
      connection: Model,
      group: Model,
      connector: Model,
    },

    seeds(server) {
      getFlows.objects.forEach((flow) => {
        server.create('flow', flow);
      });

      getConnections.objects.forEach((connection) => {
        server.create('connection', connection);
      });

      getGroups.objects.forEach((group) => {
        server.create('group', group);
      });

      getConnectors.forEach((connector) => {
        server.create('connector', connector);
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/flows', () => {
        return getFlows;
      });

      this.get('/flows/:id', (schema, request) => {
        const flowId = request.params.id;

        return schema.flows.findBy({ id: flowId });
      });

      this.get('/flows/:id/elements', (request) => {
        const flowId = request.params.id;

        return responses[flowId].getElements;
      });

      this.put('/flows/:id', (request) => {
        const flowId = request.params.id;

        return responses[flowId].putFlow;
      });

      this.get('/connections', () => {
        return getConnections;
      });

      this.get('/connector', () => {
        return getConnectors;
      });

      this.put('/connections/:id', (schema, request) => {
        const connectionId = request.params.id;

        return schema.connections.findBy({ id: connectionId });
      });

      this.get('/groups', () => {
        return getGroups;
      });

      this.put('/groups/:id', (schema, request) => {
        const groupId = request.params.id;

        return schema.groups.findBy({ id: groupId });
      });
    },
  });

  return server;
}
