export const pointIsInsideBox = (pointX, pointY, boxX, boxY, boxW, boxH) => {
  return pointX >= boxX && pointX <= boxX + boxW && pointY >= boxY && pointY <= boxY + boxH;
};

export const getMouseCoord = (e, svgRef) => {
  if (!svgRef || !svgRef.current) return;
  const svg = svgRef.current;

  var pt = svg.createSVGPoint();
  pt.x = e.clientX;
  pt.y = e.clientY;

  return pt.matrixTransform(svg.getScreenCTM()?.inverse());
};

export const getCollidedNodeIndex = (loc, nodeList) => {
  let _hoveredNodeIndex = -1;
  for (let i = 0; i < nodeList.length; i++) {
    let node = nodeList[i].props.def;
    let didCollide = pointIsInsideBox(
      loc.x,
      loc.y,
      node.functionalX,
      node.functionalY,
      node.functionalW,
      node.functionalH,
    );

    if (didCollide) {
      _hoveredNodeIndex = i;
      break;
    } else {
      _hoveredNodeIndex = -1;
    }
  }
  return _hoveredNodeIndex;
};
