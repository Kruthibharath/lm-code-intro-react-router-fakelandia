import React, { createContext, useEffect, useState } from "react";
import { Misdemeanour } from "../../../types/misdemeanor.types";

interface MisdemeanorsContextProps {
  misdemeanors: Misdemeanour[];
  setMisdemeanors: React.Dispatch<React.SetStateAction<Misdemeanour[]>>;
  originalMisdemeanors: Misdemeanour[];
}

export const MisdemeanorsContext = createContext<MisdemeanorsContextProps>({
  misdemeanors: [],
  setMisdemeanors: () => {},
  originalMisdemeanors: [],
});

interface MisdemeanorsProviderProps {
  children: React.ReactNode;
}

export const MisdemeanorsProvider: React.FC<MisdemeanorsProviderProps> = ({
  children,
}) => {
  const [misdemeanors, setMisdemeanors] = useState<Misdemeanour[]>([]);
  //Important to update original list whenever misdemeanor changes to get the originalList when "All" option is selected
  const [originalMisdemeanors, setOriginalMisdemeanors] = useState<
    Misdemeanour[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/misdemeanours/10"
        );
        const data = await response.json();
        //console.log(data);
        const fetchedMisdemeanors = data.misdemeanours || [];
        setMisdemeanors(fetchedMisdemeanors);
        setOriginalMisdemeanors([...fetchedMisdemeanors]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <MisdemeanorsContext.Provider
      value={{ misdemeanors, setMisdemeanors, originalMisdemeanors }}
    >
      {children}
    </MisdemeanorsContext.Provider>
  );
};
