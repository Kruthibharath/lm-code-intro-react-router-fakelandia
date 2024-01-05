import React from "react";
import { Misdemeanour } from "../../types/misdemeanor.types";

interface MisdemeanorProps {
  misdemeanors: Misdemeanour[];
}

export const Misdemeanors: React.FC<MisdemeanorProps> = ({ misdemeanors }) => {
  return (
    <>
      <div style={{ display: "inline-table" }}>
        {misdemeanors ? (
          /*
          <div style={{ display: "flex", flexDirection: "column" }}>
            {misdemeanors.map((misdemeanor, index) => (
              <div key={index}>
                <p>{misdemeanor.citizenId}</p>
                <p>{misdemeanor.date}</p>
                <p>{misdemeanor.misdemeanour}</p>
              </div>
            ))}
          </div>*/
          <table>
            <thead>
              <tr>
                <th>Citizen ID</th>
                <th>Date</th>
                <th>Misdemeanour</th>
              </tr>
            </thead>
            <tbody>
              {misdemeanors.map((item, index) => (
                <tr key={index}>
                  <td>{item.citizenId}</td>
                  <td>{item.date}</td>
                  <td>{item.misdemeanour}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};
