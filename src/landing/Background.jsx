import React from "react";

import landingBG from "./images/landing.png";

const Background = () => {
  return (
    <div
      className="absolute inset-0 bg-cover blur-md -z-10"
      style={{ backgroundImage: `url(${landingBG})` }}
    />
  );
};
export default Background;
