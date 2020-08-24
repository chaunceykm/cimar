import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { Lock } from "@material-ui/icons";
import logo from "../../../assets/logo.png";
import "fontsource-handlee";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    zIndex: 1,
  },
  logo: {
    maxHeight: "110px",
    maxWidth: "150px",
  },
  logoContainer: {
    paddingLeft: "35px",
  },
  text: {
    fontFamily: "Handlee",
  },
  button: {
    paddingRight: '25px'
  }
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      component="header"
      justify="space-between"
    >
      <Grid item className={classes.logoContainer} xs={10}>
        <img className={classes.logo} src={logo} alt="cimar logo" />
        <Typography variant="h4" className={classes.text}>
          Cuz i Matter Animal Rescue
        </Typography>
      </Grid>
      <Grid item container alignContent='flex-end' justify='flex-end'xs={2}>
        <IconButton href='/login' className={classes.button}>
          <Lock />
          <Typography>Admin</Typography>
        </IconButton>
      </Grid>
    </Grid>
  );
};
