import React from "react";
import { MisdemeanourKind } from "./../../types/misdemeanor.types";
import { useMisdemeanorsContext } from "./MisdemeanorsContext/useMisdemeanorsContext";

interface MisdemeanorFilterProps {
  handleFilter: (selectedFilter: MisdemeanourKind | "All") => void;
  currentFilter: MisdemeanourKind | "All";
}

export const MisdemeanorFilter: React.FC<MisdemeanorFilterProps> = ({
  handleFilter,
  currentFilter,
}) => {
  const { setMisdemeanors, originalMisdemeanors } = useMisdemeanorsContext();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value as MisdemeanourKind | "All";
    handleFilter(selectedFilter);
    if (selectedFilter === "All") {
      setMisdemeanors(originalMisdemeanors);
    }
  };
  return (
    <>
      <div>
        <label htmlFor="misdemeanorFilter">Filter by Misdemeanor:</label>
        <select
          id="misdemeanorFilter"
          onChange={handleChange}
          value={currentFilter}
        >
          <option value="">All</option>
          <option value="rudeness">Mild Public Rudeness</option>
          <option value="vegetables">Not Eating Your Vegetables</option>
          <option value="lift">Speaking in a Lift</option>
          <option value="united">Supporting Manchester United</option>
        </select>
      </div>
    </>
  );
};
