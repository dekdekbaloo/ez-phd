import React, { useEffect, useState } from "react";
import Background from "../landing/Background";
import Cert from "../certificate/Cert";
import { Link, useNavigate } from "react-router-dom";
import { getHallOfFame } from "./services";
import Button from "../ui/Button";

const HallOfFame = () => {
  // const certificates = [
  //   { name: "Alice", faculty: "Science" },
  //   { name: "Bob", faculty: "Engineering" },
  //   { name: "Charlie", faculty: "Arts" },
  //   { name: "Dave", faculty: "Mathematics" },
  //   { name: "Eve", faculty: "Biology" },
  //   { name: "Frank", faculty: "Physics" },
  //   { name: "Grace", faculty: "Chemistry" },
  //   { name: "Hank", faculty: "Literature" },
  //   { name: "Charlie", faculty: "Arts" },
  //   { name: "Dave", faculty: "Mathematics" },
  //   { name: "Eve", faculty: "Biology" },
  //   { name: "Frank", faculty: "Physics" },
  //   { name: "Grace", faculty: "Chemistry" },
  //   { name: "Hank", faculty: "Literature" },
  //   { name: "Charlie", faculty: "Arts" },
  //   { name: "Dave", faculty: "Mathematics" },
  //   { name: "Eve", faculty: "Biology" },
  //   { name: "Frank", faculty: "Physics" },
  //   { name: "Grace", faculty: "Chemistry" },
  //   { name: "Hank", faculty: "Literature" },
  // ];

  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    getHallOfFame().then(setCertificates);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen">
      <Background />
      <div className="w-full h-full overflow-auto">
        <div className="font-gregorian font-bold capitalize text-9xl text-center pt-10 pb-5 w-full">
          HALL OF FAME
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="transition-transform transform hover:-translate-y-2 cursor-pointer"
              onClick={() =>
                navigate(
                  `/certificate?name=${cert.name}&faculty=${cert.faculty}&id=${cert.id}`
                )
              }
            >
              <Cert name={cert.name} faculty={cert.faculty} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 w-full pt-4 px-4 flex flex-col md:flex-row justify-between gap-2">
        <div className="flex gap-2">
          <Link to="/">
            <Button>Start over</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;
