import React from "react";
import { useMisdemeanorsContext } from "./MisdemeanorsContext/useMisdemeanorsContext";
import { Misdemeanors } from "./Misdemeanors";

export const MisdemeanorList: React.FC = () => {
  const { misdemeanors } = useMisdemeanorsContext();
  return (
    <>
      <div>
        <h2>Misdemeanors List</h2>
        {misdemeanors && misdemeanors.length > 0 ? (
          <Misdemeanors misdemeanors={misdemeanors} />
        ) : (
          <p>No misdemeanors found!!</p>
        )}
      </div>
    </>
  );
};
