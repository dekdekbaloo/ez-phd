import React from "react";
import template from "./images/template.png";
import { ASPECT_RATIO } from "./constants";
import colors from "tailwindcss/colors";

const Cert = ({ name, faculty }) => {
  return (
    <div
      className="relative"
      style={{
        width: "100%",
        height: 0,
        paddingBottom: `${100 / ASPECT_RATIO}%`,
      }}
    >
      <svg viewBox="0 0 100 77" preserveAspectRatio="xMidYMid meet">
        <image href={template} width="100" />
        <text
          x="55"
          y="31"
          className="font-gregorian font-bold capitalize"
          fontSize={5}
          fill={colors.blue[900]}
          textAnchor="middle"
        >
          {name}
        </text>
        <text
          x="55"
          y="42"
          className="font-gregorian font-bold capitalize"
          fontSize={5}
          fill={colors.blue[900]}
          textAnchor="middle"
        >
          Doctor of Philosophy (Ph.D.)
        </text>
        <text
          x="55"
          y="46"
          className="font-gregorian font-bold capitalize"
          fontSize={3}
          fill={colors.blue[900]}
          textAnchor="middle"
        >
          In {faculty}
        </text>
      </svg>
    </div>
  );
};

export default Cert;
