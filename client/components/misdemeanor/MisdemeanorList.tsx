import React, { useEffect } from "react";
import { useMisdemeanorsContext } from "./MisdemeanorsContext";
import { Misdemeanors } from "./Misdemeanors";
//import { Misdemeanour } from "../../types/misdemeanor.types";

/*interface MisdemeanorListProps {
  misdemeanors: Misdemeanour[];
}
const useMisdemeanorsContext = () =>
  useContext({ misdemeanors, setMisdemeanors });
*/

export const MisdemeanorList: React.FC = () => {
  const [misdemeanors, setMisdemeanors] = useMisdemeanorsContext();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/misdemeanours/4"
        );
        const data = await response.json();
        console.log(data);
        setMisdemeanors(data.misdemeanours || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [misdemeanors.length, setMisdemeanors]);
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
