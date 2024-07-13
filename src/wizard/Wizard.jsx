import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../landing/Background";
import Button from "../ui/Button";

const STEP = {
  NAME: 1,
  FACULTY: 2,
};

const Wizard = () => {
  const [step, setStep] = useState(STEP.NAME);
  const [name, setName] = useState("");
  const [faculty, setFaculty] = useState("");

  const next = () => {
    if (step < STEP.FACULTY) {
      setStep(step + 1);
    } else {
      confirm();
    }
  };

  const navigate = useNavigate();
  const confirm = () => {
    navigate(`/certificate?name=${name}&faculty=${faculty}`);
  };

  const reset = () => {
    setName("");
    setFaculty("");
    setStep(STEP.NAME);
  };

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center text-center">
      <Background />
      <div className="flex flex-col bg-[#adac94] p-8 rounded-md shadow-md gap-10">
        <h1 className="text-2xl font-bold mb-4">Fill in your detail</h1>
        <div className="text-left space-y-1 font-gregorian text-lg">
          <div>
            Name: <span className="text-blue-900 capitalize">{name}</span>
          </div>
          <div>
            Faculty: <span className="text-blue-900 capitalize">{faculty}</span>
          </div>
        </div>
        {step === STEP.NAME && (
          <label>
            Your Name:{" "}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </label>
        )}
        {step === STEP.FACULTY && (
          <label>
            Your Faculty:{" "}
            <input
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              autoFocus
            />
          </label>
        )}
        <div className="flex items-center justify-between">
          <div className="underline" onClick={reset}>
            reset
          </div>
          <Button onClick={next}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Wizard;
