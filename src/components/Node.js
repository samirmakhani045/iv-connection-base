import React from 'react';
import PropTypes from 'prop-types';

const getIconX = (def) => def.functionalX + 20;
const getIconY = (def) => def.functionalY + 10;

// prettier-ignore
const sourceIcon = (def) => (
  <g
    id="Source/Icon"
    stroke="none"
    strokeWidth="1"
    fill="none"
    fillRule="evenodd"
    transform={"translate(" + String(getIconX(def)) + "," + String(getIconY(def)) + ")"}
  >
    <path
      d="M31,21.6666667 L31,20.8333333 C31,20.3730833 30.6628871,20 30.2470116,20 L19.7529884,20 C19.3371129,20 19,20.3730833 19,20.8333333 L19,21.6666667 C19,22.1269167 19.3371129,22.5 19.7529884,22.5 L30.2470116,22.5 C30.6628871,22.5 31,22.1269167 31,21.6666667 Z"
      id="Path-Copy-77"
      fill="#77AACC"
      fillRule="nonzero"
    ></path>
    <path
      d="M31,16.6666667 L31,15.8333333 C31,15.3730833 30.6628871,15 30.2470116,15 L19.7529884,15 C19.3371129,15 19,15.3730833 19,15.8333333 L19,16.6666667 C19,17.1269167 19.3371129,17.5 19.7529884,17.5 L30.2470116,17.5 C30.6628871,17.5 31,17.1269167 31,16.6666667 Z"
      id="Path-Copy-76"
      fill="#77AACC"
      fillRule="nonzero"
    ></path>
    <path
      d="M36.6792474,8.04800917 L31.2247281,2.3336828 C31.1231586,2.22700877 31.0022212,2.14270079 30.869075,2.08571423 C30.7374629,2.0293973 30.5967102,2 30.4545513,2 L16.2727244,2 C13.6986254,2 13,3.12345119 13,5.42856904 L13,30.571431 C13,32.7614625 14.0165134,34 16.2727244,34 L33.7272756,34 C36.0544183,34 37,32.7390234 37,30.571431 L37,8.85713807 C36.9984659,8.55379007 36.8832814,8.26323224 36.6792474,8.04800917 Z M31,5 L34,8 L31,8 L31,5 Z M35,30.8333134 C35,31.4776673 34.5024756,32 33.8888057,32 L16.1111292,32 C15.4974593,32 15,31.4776673 15,30.8333134 L15,5.1666866 C15,4.52233271 15.4974593,4 16.1111292,4 L29.4444191,4 L29.4444191,8.66667806 C29.4444191,9.31103196 29.9418784,9.83336466 30.5555483,9.83336466 L35,9.83336466 L35,30.8333134 L35,30.8333134 Z"
      id="Shape-Copy-10"
      fill="#77AACC"
      fillRule="nonzero"
    ></path>
  </g>
);
// prettier-ignore
const joinIcon = (def) => (
  <g
    id="Join/Icon"
    stroke="none"
    strokeWidth="1"
    fill="none"
    fillRule="evenodd"
    transform={"translate(" + String(getIconX(def)) + "," + String(getIconY(def)) + ")"}
  >
    <circle id="Oval-Copy-27" stroke="#A6B4BE" fill="#D2ECFF" cx="17" cy="18" r="13"></circle>
    <circle id="Oval-Copy-26" stroke="#A6B4BE" fill="#FFD5EC" cx="33" cy="18" r="13"></circle>
    <path
      d="M25.0009487,7.75305734 C28.0439458,10.1324363 30,13.8377877 30,18 C30,22.1622123 28.0439458,25.8675637 25.0009487,28.2469427 C21.9564846,25.8683789 20,22.1626702 20,18 C20,13.8973133 21.9005056,10.2385134 24.8691631,7.85595397 Z"
      id="Combined-Shape-Copy-11"
      stroke="#A6B4BE"
      fill="#FFFFFF"
    ></path>
  </g>
);

const Node = (props) => {
  let { def, index, hoveredNodeIndex, selectedNodeIndex } = props;

  let icon = null;

  if (def.type === 'source') {
    icon = sourceIcon(def);
  } else if (def.type === 'join') {
    icon = joinIcon(def);
  }

  let textOffsetY = 10;
  let textOffsetX = -16;

  let textStyle = {
    fontSize: '14px',
    width: '120px',
    textAlign: 'center',
  };

  let stroke = '#f5f8fc';
  if (index === selectedNodeIndex) {
    stroke = '#4F88FF';
  } else if (index === hoveredNodeIndex) {
    stroke = '#a8c4ff';
  }

  return (
    <>
      {icon}
      <foreignObject
        width="200"
        height="80"
        transform={`translate(
          ${def.functionalX + textOffsetX},
          ${def.functionalY + def.functionalH + textOffsetY}
        )`}
      >
        <div style={textStyle}>{def.label}</div>
      </foreignObject>
      <g
        className="nodeBorder"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform={`translate(${def.functionalX}, ${def.functionalY})`}
      >
        <rect
          stroke={stroke}
          strokeWidth="2"
          x="1"
          y="1"
          width={def.functionalW}
          height={def.functionalH}
          rx="6"
        />
      </g>
    </>
  );
};

Node.propTypes = {
  def: PropTypes.object,
  index: PropTypes.number,
  hoveredNodeIndex: PropTypes.number,
  selectedNodeIndex: PropTypes.number,
};

export default Node;
