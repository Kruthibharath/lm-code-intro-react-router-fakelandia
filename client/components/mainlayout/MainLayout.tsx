import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
