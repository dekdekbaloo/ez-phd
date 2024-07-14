import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Background from "../landing/Background";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Speech = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Background />
      <h1 className="font-gregorian text-5xl text-white mb-4">
        Speech from our alumni
      </h1>
      <div className="w-8/12">
        <LiteYouTubeEmbed id="VbPv96wvDVc" params="start=120" />
      </div>
      <Link to="/">
        <Button className="absolute top-4 left-4">Start</Button>
      </Link>
    </div>
  );
};
export default Speech;
