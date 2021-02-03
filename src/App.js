import React, { useState } from "react";
import "./App.css";
import PetList from "./PetList";

export default function App() {
  const [showPets, setShowPets] = useState(false);
  return (
    <div className="App">
      <h1> Welcome to Pet App </h1>
      <PetList />
      <button onClick={() => setShowPets(!showPets)}>
        {showPets ? "Hide pets" : "Show pets"}
      </button>
      {showPets}
    </div>
  );
}


