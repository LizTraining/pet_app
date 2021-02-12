import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import PetsIcon from '@material-ui/icons/Pets';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
      flex: 1
  }
}));

const Header = () => {
    const classes = useStyles();
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.typographyStyles}>
            Welcome to Pet App
          </Typography>
          <PetsIcon />
        </Toolbar>
      </AppBar>
    );
};

export default Header;