import React, { useState } from "react"; 
import "./App.css";
import PetList from "./PetList";
import Pet from "./Pet";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Header from "./Header";

export default function App() {
  const [showPets, setShowPets] = useState(true);
  return (
    <div className="App">
      




      <Grid container direction = "column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={1} sm={2} /> {/* Padding on either side */}
          <Grid item xs={12} sm={8}>
            <button onClick={() => setShowPets(!showPets)}>
            { showPets ? "Show pets" : "Hide pets" }
            </button> 
          </Grid>
          <Grid item xs={12} sm={12}>
          { showPets ? "" :  
            (<Router>
              <Switch>
               <Route exact path="/" children={<PetList />} />
               <Route path="/pet/:id" children={<Pet />} />
              </Switch>
             </Router>
            )}
          </Grid>
          <Grid item xs={1} sm={2} /> {/* Padding on either side */}
        </Grid>
      </Grid>
    </div>
  );
}



