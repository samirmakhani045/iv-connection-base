export const stageElement = (element) => {
  return {
    ...element,
    functionalX: element.x + 100 - 20,
    functionalY: element.y + 50 - 10,
    functionalW: 84,
    functionalH: 52,
  };
};

export const stageElements = (elements) => {
  return elements?.map((element) => stageElement(element)) || [];
};
