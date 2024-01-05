import React, { createContext, useContext, useState } from "react";
import { Misdemeanour } from "../../types/misdemeanor.types";

interface MisdemeanorsContextProps {
  misdemeanors: Misdemeanour[];
  setMisdemeanors: React.Dispatch<React.SetStateAction<Misdemeanour[]>>;
}

const MisdemeanorsContext = createContext<MisdemeanorsContextProps>({
  misdemeanors: [],
  setMisdemeanors: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useMisdemeanorsContext = () => useContext(MisdemeanorsContext);

interface MisdemeanorsProviderProps {
  children: React.ReactNode;
}

export const MisdemeanorsProvider: React.FC<MisdemeanorsProviderProps> = ({
  children,
}) => {
  const [misdemeanors, setMisdemeanors] = useState<Misdemeanour[]>([]);
  return (
    <MisdemeanorsContext.Provider value={{ misdemeanors, setMisdemeanors }}>
      {children}
    </MisdemeanorsContext.Provider>
  );
};
