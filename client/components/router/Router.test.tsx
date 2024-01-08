import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Router } from "./Router";

describe("Router component", () => {
  test('renders Home component when "/" path is accessed', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Router />
      </MemoryRouter>
    );
    expect(
      screen.getByText(
        "WELCOME TO THE HOME OF THE JUSTICE DEPARTMENT OF FAKELANDIA"
      )
    ).toBeInTheDocument();
  });
});
