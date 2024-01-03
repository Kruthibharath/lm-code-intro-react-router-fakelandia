import React from "react";
import { Nav } from "./Nav";

export const Header: React.FC = () => {
  return (
    <>
      <header className="header is-flex is-align-items-center is-justify-content-center">
        <h2 className="upperCase">Fakelandia Justice Department</h2>
        <Nav />
      </header>
    </>
  );
};
