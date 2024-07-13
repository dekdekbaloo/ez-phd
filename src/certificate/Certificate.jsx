import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Cert from "./Cert";
import Button from "../ui/Button";
import Background from "../landing/Background";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import "./Certificate.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import template from "./images/template.png";
import clsx from "clsx";

const Certificate = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const faculty = searchParams.get("faculty");

  const handleExport = async () => {
    const certElement = document.getElementById("cert-element");
    const pngDataUrl = await toPng(certElement);
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [certElement.clientWidth, certElement.clientHeight],
    });
    pdf.addImage(
      pngDataUrl,
      "PNG",
      0,
      0,
      certElement.clientWidth,
      certElement.clientHeight
    );
    pdf.save("certificate.pdf");
  };

  const [ready, setReady] = useState(false);
  useEffect(() => {
    // wait template.png to load
    const img = new Image();
    img.src = template;
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
                    transform: `rotate3d(${(y - height / 2) / 1000}, ${
                      -(x - width / 2) / 1000
                    }, 0, 5deg)`,
                  }
                : {}
            }
          >
            <Cert name={name} faculty={faculty} />
          </div>
        </>
      )}
      {confetti && <Confetti width={width} height={height} />}
      <div className="absolute top-0 w-full pt-4 px-4 flex justify-between">
        <Button>Hall of fame</Button>
        <div className="space-x-2">
          <Button onClick={handleExport}>Export</Button>
          <Button>Add to hall of fame</Button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
