import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { getMouseCoord, getCollidedNodeIndex } from '@studio/utils/geom';
import { mapCommonStates, modifyObjectWith } from '@studio/utils/store';
import { useTranslation } from '@studio/hooks/useTranslation';

import * as colors from '@studio/theme/colors';

import Node from './Node';

const Board = ({ flowState, elementState, updateFlowLocally }) => {
  const { t } = useTranslation('components.loading');

  const { flow } = flowState;
  const { elements } = elementState;
  const svgRef = useRef(null);

  const [localFlow, setLocalFlow] = useState(flow);
  const [localElements, setLocalElements] = useState(elements);
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(-1);
  const [hoveredNodeIndex, setHoveredNodeIndex] = useState(-1);
  const [draggingNode, setDraggingNode] = useState({
    index: -1,
    xOffset: 0,
    yOffset: 0,
  });

  useEffect(() => {
    setLocalFlow(flow);
    setLocalElements(elements);
  }, [flow, elements]);

  // fallback rendered view
  if (!localFlow || !localElements.length) return <div>{t('loading')}</div>;

  // TODO: refactor old components to use styled-components
  const boardStyle = {
    width: '100%',
    background: colors.cloud1,
    height: '50vh',
  };

  let nodeList = [];
  for (let i = 0; i < localElements.length - 1; i++) {
    let def = localElements[i];
    if (def.type === 'edge') {
      // TODO
    } else {
      nodeList.push(
        <Node
          def={def}
          index={i}
          key={i}
          hoveredNodeIndex={hoveredNodeIndex}
          selectedNodeIndex={selectedNodeIndex}
        />,
      );
    }
  }

  const mouseMove = (e) => {
    const loc = getMouseCoord(e, svgRef);

    if (draggingNode.index === -1) {
      const _hoveredNodeIndex = getCollidedNodeIndex(loc, nodeList);

      if (_hoveredNodeIndex !== hoveredNodeIndex) setHoveredNodeIndex(_hoveredNodeIndex);
    } else {
      modifyObjectWith(localElements, setLocalElements, (elements) => {
        elements[draggingNode.index].functionalX = loc.x + draggingNode.xOffset;
        elements[draggingNode.index].functionalY = loc.y + draggingNode.yOffset;
      });
    }
  };

  const mouseDown = (e) => {
    const loc = getMouseCoord(e, svgRef);
    const index = getCollidedNodeIndex(loc, nodeList);

    if (index === -1) return;

    const xOffset = nodeList[index].props.def.functionalX - loc.x;
    const yOffset = nodeList[index].props.def.functionalY - loc.y;

    setDraggingNode({
      ...draggingNode,
      index,
      xOffset,
      yOffset,
    });
  };

  const mouseUp = (e) => {
    setDraggingNode({
      ...draggingNode,
      index: -1,
    });

    const loc = getMouseCoord(e, svgRef);
    const index = getCollidedNodeIndex(loc, nodeList);

    modifyObjectWith(localFlow, updateFlowLocally, (flow) => {
      flow.selectedElementIndex = index;
    });
    setSelectedNodeIndex(index);
  };

  const mouseLeave = () => {
    setDraggingNode({
      ...draggingNode,
      index: -1,
    });
  };

  let vb = { x: 0, y: 0, w: 0, h: 0 };
  let zoomFactor = 1 / (localFlow.zoomLevel / 100);

  if (svgRef && svgRef.current) {
    let svgImage = svgRef.current;

    let w = zoomFactor * svgImage.clientWidth;
    let h = zoomFactor * svgImage.clientHeight;

    vb = { x: 0, y: 0, w, h };
  }

  let boardViewBoxString = `${vb.x} ${vb.y} ${vb.w} ${vb.h}`;

  return (
    <div>
      <svg
        ref={svgRef}
        style={boardStyle}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox={boardViewBoxString}
        preserveAspectRatio="xMinYMin slice"
        onMouseMove={mouseMove}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        onMouseLeave={mouseLeave}
      >
        {nodeList}
      </svg>
    </div>
  );
};

Board.propTypes = {
  flowState: PropTypes.shape({
    flow: PropTypes.object,
  }),
  elementState: PropTypes.shape({
    elements: PropTypes.array,
  }),
  updateFlowLocally: PropTypes.func,
};

export default mapCommonStates(Board);
