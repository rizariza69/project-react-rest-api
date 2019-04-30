import React from "react";
import { GetAll } from "./components/GetAll";
import { Github } from "./components/github";
import { Weather } from "./components/Weather";
import "./App.css";

function App() {
  return (
    <div>
      <GetAll />
      <Github />
      <Weather />
    </div>
  );
}

export default App;
