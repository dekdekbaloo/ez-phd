import React from "react";
import { useSearchParams } from "react-router-dom";
import Cert from "./Cert";
import Button from "../ui/Button";
import Background from "../landing/Background";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

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

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Background />
      <div id="cert-element" className="w-10/12 max-w-[1024px]">
        <Cert name={name} faculty={faculty} />
      </div>
      <Button onClick={handleExport} className="absolute top-4 right-4">
        Export
      </Button>
    </div>
  );
};

export default Certificate;
