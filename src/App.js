import React, { useState } from "react"; 
import "./App.css";
import PetList from "./PetList";
import Pet from "./Pet";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, IconButton,  } from "@material-ui/core";
import Header from "./Header";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';

const useStyles = makeStyles({
  buttonStyle: {
    color: ""
  }
});

export default function App() {

  const classes = useStyles();

  const [showPets, setShowPets] = useState(true);

  return (
    <div className="App">
      <Grid container direction = "column">
        <Grid item>
          {/* Header */}
          <Header />
        </Grid>

        <Grid item xs={12}>
          {/* Show/hide pets button */}
          <Box p={2}>
            <IconButton onClick={() => setShowPets(!showPets)} className={classes.buttonStyle}>
              { showPets ? <VisibilityTwoToneIcon /> : <VisibilityOffTwoToneIcon /> }
              { showPets ? "Show pets" : "Hide pets" }
            </IconButton> 
         </Box>
        
        
          {/* Pet cards */}
          <Grid item>
          { showPets ? "" :  
          (<Router>
            <Switch>
             <Route exact path="/" children={<PetList />} />
             <Route path="/pet/:id" children={<Pet />} />
            </Switch>
           </Router>
          )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}



