import React, { useState } from "react"; 
import "./App.css";
import PetList from "./PetList";
import Pet from "./Pet";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import Header from "./Header";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';
import { blue, purple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  buttonStyle: {
    fontFamily: "Cabin, sans-serif"
  },
  paperStyle: {
    // color="primary" variant="main"
    background: `linear-gradient{45deg, ${purple} 30%, ${blue}, 90% }`
  }
}));

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

        <Grid container item>
        <Grid item xs={12} />
          <Box p={3}></Box>
        </Grid>

        <Grid container>
          <Grid item xs={1} sm={3} />
            <Grid item xs={10} sm={6}>
              <Paper className={classes.paperStyle}>
                <Typography variant={"h5"}> 
                  Welcome to Pet App. 
                </Typography>
                <Typography variant={"h6"}> 
                  Clicking on a pet below will display their details. 
                </Typography>
              </Paper>
            </Grid>
          <Grid item xs={1} sm={3}/>
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



