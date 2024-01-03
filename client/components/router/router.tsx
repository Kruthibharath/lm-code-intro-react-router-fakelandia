import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../mainlayout/Mainlayout";
import { Home } from "../Home";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route index element={<Home />} />
    </Routes>
  );
};
