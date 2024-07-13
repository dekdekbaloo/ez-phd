import React from "react";
import landingBG from "./images/landing.png";

const Landing = () => {
  return (
    <div
      className="absolute inset-0 bg-cover"
      style={{ backgroundImage: `url(${landingBG})` }}
    ></div>
  );
};

export default Landing;
