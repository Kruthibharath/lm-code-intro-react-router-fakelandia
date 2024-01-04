import React from "react";
import { Misdemeanour } from "../../types/misdemeanor.types";

interface MisdemeanorProps {
  misdemeanors: Misdemeanour[];
}

export const Misdemeanors: React.FC<MisdemeanorProps> = ({ misdemeanors }) => {
  return (
    <>
      <div>
        {misdemeanors ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {misdemeanors.map((misdemeanor, index) => (
              <div key={index}>
                <p>{misdemeanor.citizenId}</p>
                <p>{misdemeanor.date}</p>
                <p>{misdemeanor.misdemeanour}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};
