import { useState } from "react";
import "./App.css";
import { meny } from "./data/meny";
import Menu from "./components/Menu";

function App() {
  return (
    <main>
      <h1>Restaurant meny</h1>
      <Menu items={meny} />
    </main>
  );
}
export default App;
