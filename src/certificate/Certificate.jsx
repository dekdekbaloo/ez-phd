import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Cert from "./Cert";
import Button from "../ui/Button";
import Background from "../landing/Background";
import { toPng } from "html-to-image";
import "./Certificate.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import clsx from "clsx";
import { addToHallOfFame } from "./services";
import { createCertID } from "./utils";

const Certificate = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const faculty = searchParams.get("faculty");
  const id = searchParams.get("id");
  const navigate = useNavigate();

  const handleExport = async () => {
    const certElement = document.getElementById("cert-element");

    // HACK: workaround for safari
    await toPng(certElement);
    await toPng(certElement);
    await toPng(certElement);
    const pngDataUrl = await toPng(certElement);
    const link = document.createElement("a");
    link.download = "certificate.png";
    link.href = pngDataUrl;
    link.click();
  };

  const [ready, setReady] = useState(false);
  useEffect(() => {
    // wait template.png to load
    const img = new Image();
    img.src = "/template.png";
    img.onload = () => setReady(true);
  }, []);

  const [confetti, setConfetti] = useState(false);
  useEffect(() => {
    setTimeout(() => setConfetti(true), 4000);
  }, [ready]);

  const { width, height } = useWindowSize();

  const [{ x, y }, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
    };
  }, []);

  const [certID] = useState(id || createCertID());
  const handleAddToHallOfFame = () => {
    // Write to firebase db
    addToHallOfFame({
      name,
      faculty,
      id: certID,
    })
      .then(() => {
        navigate("/hall-of-fame");
      })
      .catch(console.error);
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{ perspective: "1000px" }}
    >
      <Background />
      {ready && (
        <>
          <div
            id="cert-element"
            className={clsx(
              "w-10/12 max-w-[1024px]",
              !confetti && "cert-container"
            )}
            style={
              confetti
                ? {
                    // rotate3D based on mouse position diff from center
                    transform: `rotate3d(${(y - height / 2) / -1000}, ${
                      (x - width / 2) / 1000
                    }, 0, 5deg)`,
                  }
                : {}
            }
          >
            <Cert name={name} faculty={faculty} certID={certID} />
          </div>
        </>
      )}
      {confetti && <Confetti width={width} height={height} />}
      <div className="absolute top-0 w-full pt-4 px-4 flex flex-col md:flex-row justify-between gap-2">
        <div className="flex gap-2">
          <Link to="/">
            <Button>Start over</Button>
          </Link>
          <Link to="/hall-of-fame">
            <Button>Hall of fame</Button>
          </Link>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleExport} disabled={id || !confetti}>
            Export
          </Button>
          <Button onClick={handleAddToHallOfFame} disabled={id}>
            Add to hall of fame
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
