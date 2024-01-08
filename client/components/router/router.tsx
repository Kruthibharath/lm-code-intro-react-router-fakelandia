import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../mainlayout/Mainlayout";
import { Home } from "../home/Home";
import { MisdemeanorList } from "../misdemeanor/MisdemeanorList";
import { Confession } from "../confession/Confession";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="misdemeanor" element={<MisdemeanorList />} />
        <Route path="confession" element={<Confession />} />
      </Route>
    </Routes>
  );
};
