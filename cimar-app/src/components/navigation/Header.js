import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import logo from "../../assets/logo.png";
import "fontsource-handlee"; 

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    zIndex: 1
  },
  logo: {
    maxHeight: "110px",
    maxWidth: "150px",
  },
  logoContainer: {
    paddingLeft: '35px'
  },
  text: {
    fontFamily: 'Handlee'
  }
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      component="header"
      justify="flex-start"
      direction="column"
    >
      <Grid item className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="cimar logo" />
        <Typography variant="h4" className={classes.text}>Cuz i Matter Animal Rescue</Typography>
      </Grid>
    </Grid>
  );
};
