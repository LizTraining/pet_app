import React, { useState } from "react"; 
import "./App.css";
import PetList from "./PetList";
import Pet from "./Pet";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [showPets, setShowPets] = useState(true);
  return (
    <div className="App">
      <h1> Welcome to Pet App </h1>
        <button onClick={() => setShowPets(!showPets)}>
        { showPets ? "Show pets" : "Hide pets" }
        </button>  
        { showPets ? "" :  
          (<Router>
            <Switch>
              <Route exact path="/" children={<PetList />} />
              <Route path="/pet/:id" children={<Pet />} />
            </Switch>
          </Router>
          )
        }
    </div>
  );
}



