import React, { useEffect, useState } from "react";
import { Misdemeanour } from "../../types/misdemeanor.types";
import { Misdemeanors } from "./Misdemeanors";

/*interface MisdemeanorListProps {
  misdemeanors: Misdemeanour[];
}*/

export const MisdemeanorList: React.FC = () => {
  const [misdemeanorData, setMisdemeanorData] = useState<Misdemeanour[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/misdemeanours/3"
        );
        const data = await response.json();
        console.log(data);
        setMisdemeanorData(data.misdemeanours || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <h2>Misdemeanors List</h2>
        {misdemeanorData && misdemeanorData.length > 0 ? (
          <Misdemeanors misdemeanors={misdemeanorData} />
        ) : (
          <p>No misdemeanors found!!</p>
        )}
      </div>
    </>
  );
};
