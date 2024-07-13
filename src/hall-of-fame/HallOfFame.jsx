import React from "react";
import Background from "../landing/Background";
import Cert from "../certificate/Cert";

const HallOfFame = () => {
  const certificates = [
    { name: "Alice", faculty: "Science" },
    { name: "Bob", faculty: "Engineering" },
    { name: "Charlie", faculty: "Arts" },
    { name: "Dave", faculty: "Mathematics" },
    { name: "Eve", faculty: "Biology" },
    { name: "Frank", faculty: "Physics" },
    { name: "Grace", faculty: "Chemistry" },
    { name: "Hank", faculty: "Literature" },
    { name: "Charlie", faculty: "Arts" },
    { name: "Dave", faculty: "Mathematics" },
    { name: "Eve", faculty: "Biology" },
    { name: "Frank", faculty: "Physics" },
    { name: "Grace", faculty: "Chemistry" },
    { name: "Hank", faculty: "Literature" },
    { name: "Charlie", faculty: "Arts" },
    { name: "Dave", faculty: "Mathematics" },
    { name: "Eve", faculty: "Biology" },
    { name: "Frank", faculty: "Physics" },
    { name: "Grace", faculty: "Chemistry" },
    { name: "Hank", faculty: "Literature" },
  ];

  return (
    <div className="w-screen h-screen">
      <Background />
      <div className="font-gregorian font-bold capitalize text-9xl text-center pt-10 pb-5">
        HALL OF FAME
      </div>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 overflow-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="transition-transform transform hover:-translate-y-2"
          >
            <Cert name={cert.name} faculty={cert.faculty} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;
