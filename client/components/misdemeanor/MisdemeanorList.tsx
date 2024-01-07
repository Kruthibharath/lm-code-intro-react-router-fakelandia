import React, { useEffect, useState } from "react";
import { useMisdemeanorsContext } from "./MisdemeanorsContext/useMisdemeanorsContext";
import { Misdemeanors } from "./Misdemeanors";
import { MisdemeanorFilter } from "./MisdemeanorFilter";
import { Misdemeanour, MisdemeanourKind } from "../../types/misdemeanor.types";

export const MisdemeanorList: React.FC = () => {
  const { misdemeanors } = useMisdemeanorsContext();
  const [filter, setFilter] = useState<MisdemeanourKind | "All">("All");
  const [filteredMisdemeanorsList, setFilteredMisdemeanorsList] = useState<
    Misdemeanour[] | null
  >(null);
  useEffect(() => {
    if (misdemeanors) {
      setFilteredMisdemeanorsList(misdemeanors);
    }
  }, [misdemeanors]);
  const handleFilter = (selectedFilter: MisdemeanourKind | "All") => {
    if (selectedFilter === "All") {
      setFilteredMisdemeanorsList(misdemeanors || null); //null will reset to original list when "All" option is selected
    } else {
      const filtered = misdemeanors.filter((misdemeanor) => {
        return misdemeanor.misdemeanour === selectedFilter; //important to return the boolean value from the callback to display the filtered list
      });
      setFilteredMisdemeanorsList(filtered || null);
    }
    setFilter(selectedFilter);
  };
  return (
    <>
      <div>
        <h2>Misdemeanors List</h2>
        <MisdemeanorFilter handleFilter={handleFilter} currentFilter={filter} />
        {filteredMisdemeanorsList !== null &&
        filteredMisdemeanorsList.length > 0 ? (
          <Misdemeanors misdemeanors={filteredMisdemeanorsList} />
        ) : (
          <p style={{ padding: "20px 0" }}>No misdemeanors found!!</p>
        )}
      </div>
    </>
  );
};
