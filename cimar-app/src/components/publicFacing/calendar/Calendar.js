import React, {useState, useEffect} from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "80vh",
  },
}));

export const Calendar = () => {
  const classes = useStyles();
  const handleDateClick = (e) => {
    console.log("clicked");
  };
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
       
      </Grid>
    </Grid>
  );
};
