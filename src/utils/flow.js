export const stageFlow = (flow) => {
  return {
    ...flow,
    selectedElementIndex: -1,
    zoomLevel: 100,
  };
};

export const stageFlows = (flows) => {
  return flows?.map((flow) => stageFlow(flow)) || [];
};
