import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import PetsIcon from '@material-ui/icons/Pets';
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  typographyStyle: {
    marginLeft: "auto"
  }
}));

const Header = () => {
    const classes = useStyles();
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" align="left">
            Pet App
          </Typography>
          <Grid item className={classes.typographyStyle}>
            <PetsIcon />
          </Grid>
        </Toolbar>
      </AppBar>
    );
};

export default Header;