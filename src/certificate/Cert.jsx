import React from "react";
import template from "./images/template.png";
import { ASPECT_RATIO } from "./constants";
import colors from "tailwindcss/colors";
import { format } from "date-fns";

const Cert = ({ name, faculty }) => {
  return (
    <div
      id="cert-element"
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
        <text
          x="37"
          y="64"
          className="font-amsterdam font-bold capitalize"
          fontSize={1.2}
          stroke="black"
          strokeWidth={0.1}
          textAnchor="middle"
        >
          This {format(new Date(), "do")} day of{" "}
          {format(new Date(), "MMMM yyyy")}
        </text>
        <text
          x="73.4"
          y="63.8"
          className="font-bold capitalize"
          fontSize={1.2}
          textAnchor="middle"
        >
          CU{format(new Date(), "dMMyyyyss")}
        </text>
      </svg>
    </div>
  );
};

export default Cert;
