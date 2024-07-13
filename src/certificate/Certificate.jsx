import React from "react";
import { useSearchParams } from "react-router-dom";
import Cert from "./Cert";
import Button from "../ui/Button";
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
      <Button className="absolute top-4 right-4">Export</Button>
    </div>
  );
};

export default Certificate;
