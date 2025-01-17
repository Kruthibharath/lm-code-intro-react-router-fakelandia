import React from "react";
import {
  Misdemeanour,
  MisdemeanourDescriptions,
} from "../../types/misdemeanor.types";

interface MisdemeanorProps {
  misdemeanors: Misdemeanour[];
}

export const Misdemeanors: React.FC<MisdemeanorProps> = ({ misdemeanors }) => {
  const generatePicsumUrl = (): string => {
    const width = Math.floor(Math.random() * 60) + 20;
    const height = Math.floor(Math.random() * 60) + 20;
    return `https://picsum.photos/${width}/${height}`;
  };

  return (
    <>
      <div style={{ display: "inline-table" }}>
        {misdemeanors ? (
          <table>
            <thead>
              <tr>
                <th>Citizen ID</th>
                <th>Date</th>
                <th>Misdemeanour</th>
                <th>Punishment Idea</th>
              </tr>
            </thead>
            <tbody>
              {misdemeanors.map((misdemeanor, index) => (
                <tr key={index}>
                  <td>{misdemeanor.citizenId}</td>
                  <td>{misdemeanor.date}</td>
                  <td>{MisdemeanourDescriptions[misdemeanor.misdemeanour]}</td>
                  <td>
                    <img
                      src={generatePicsumUrl()}
                      alt={`Punishment for ${misdemeanor.misdemeanour}`}
                    />
                  </td>
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
