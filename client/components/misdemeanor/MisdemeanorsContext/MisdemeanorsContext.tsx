import React, { createContext, useEffect, useState } from "react";
import { Misdemeanour } from "../../../types/misdemeanor.types";
//import { useMisdemeanorsContext } from "./useMisdemeanorContext";

interface MisdemeanorsContextProps {
  misdemeanors: Misdemeanour[];
  setMisdemeanors: React.Dispatch<React.SetStateAction<Misdemeanour[]>>;
}

export const MisdemeanorsContext = createContext<MisdemeanorsContextProps>({
  misdemeanors: [],
  setMisdemeanors: () => {},
});

interface MisdemeanorsProviderProps {
  children: React.ReactNode;
}

export const MisdemeanorsProvider: React.FC<MisdemeanorsProviderProps> = ({
  children,
}) => {
  const [misdemeanors, setMisdemeanors] = useState<Misdemeanour[]>([]);
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
  }, []);
  return (
    <MisdemeanorsContext.Provider value={{ misdemeanors, setMisdemeanors }}>
      {children}
    </MisdemeanorsContext.Provider>
  );
};
