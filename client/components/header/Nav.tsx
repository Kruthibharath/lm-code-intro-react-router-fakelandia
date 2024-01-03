import React from "react";
import { NavLink } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <ul
      style={{ width: "100%" }}
      className="is-flex is-flex-direction-row is-justify-content-space-evenly"
    >
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/misdemeanor">Misdemeanor</NavLink>
      </li>
      <li>
        <NavLink to="/confession">Confession</NavLink>
      </li>
    </ul>
  );
};
