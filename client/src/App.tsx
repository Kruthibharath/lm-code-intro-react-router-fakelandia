import { BrowserRouter } from "react-router-dom";
import { Router } from "../components/router/router";
import { MisdemeanorsProvider } from "../components/misdemeanor/MisdemeanorsContext";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <MisdemeanorsProvider>
          <Router />
        </MisdemeanorsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
