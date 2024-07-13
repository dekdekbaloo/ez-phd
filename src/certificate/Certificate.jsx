import React from "react";
import { useSearchParams } from "react-router-dom";
import Cert from "./Cert";
import Background from "../landing/Background";

const Certificate = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const faculty = searchParams.get("faculty");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Background />
      <div className="w-10/12 max-w-[1024px]">
        <Cert name={name} faculty={faculty} />
      </div>
    </div>
  );
};

export default Certificate;
