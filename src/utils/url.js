// Base URLs for Openlytics services

const getApiHttpBaseUrl = () => {
  // Returns 'https://studio.openlytics.io/api' or 'http://studio.op.io/api'.
  return `${window.location.protocol}//${window.location.host}/api`;
};

const getApiWebsocketBaseUrl = () => {
  // Returns 'wss://studio.openlytics.io/api' or 'ws://studio.op.io/api'.
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  return `${protocol}//${window.location.host}/api`;
};

const getMessagesUrl = (flowId) => {
  // Returns full URL of websockets endpoint that client can use to
  // send messages regarding a given flow.
  // For example, 'wss://studio.openlytics.io/api/flows/a1b2c3d4/messages'.
  return `${getApiWebsocketBaseUrl()}/flows/${flowId}/messages`;
};

// TODO: probably can clean up the integer parsing + string casting since id will always be a UUID
const getFlowIdFromUrl = (params) => {
  if (!('id' in params)) throw new Error('Invalid URL Parameters');

  return `${params.id}`;
};

export { getApiHttpBaseUrl, getApiWebsocketBaseUrl, getMessagesUrl, getFlowIdFromUrl };
