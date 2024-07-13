import React from "react";
import { Link } from "react-router-dom";
import Background from "./Background";
import gh from "./images/github-mark-white.svg";
import Button from "../ui/Button";

const Landing = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-10">
      <Background />
      <h1 className="text-white text-9xl font-bold">EZ PHD</h1>
      <Link to="/wizard">
        <Button className="animate__animated animate__fadeInUp animate__delay-1s">
          Get started
        </Button>
      </Link>
      <a
        className="absolute bottom-20 w-10"
        href="https://github.com/dekdekbaloo/ez-phd"
        target="_blank"
        rel="noreferrer"
      >
        <img src={gh} />
      </a>
    </div>
  );
};

export default Landing;
