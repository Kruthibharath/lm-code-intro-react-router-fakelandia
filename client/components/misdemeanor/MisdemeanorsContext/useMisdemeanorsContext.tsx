import { useContext } from "react";
import { MisdemeanorsContext } from "./MisdemeanorsContext";

export const useMisdemeanorsContext = () => {
  const context = useContext(MisdemeanorsContext);
  if (!context) {
    throw new Error(
      "useMisdemeanorsContext must be used within a MisdemeanorsProvider"
    );
  }
  return context;
};
