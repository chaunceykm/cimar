import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import {} from "@material-ui/icons";
import collage2 from "../assets/collage2.jpg";
import { Announcements } from "./Announcements";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh'
  },
  picture: {
    backgroundImage: `url(${collage2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  content: {
    padding: '15px'
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item container className={classes.picture} xs={6} />
      <Grid item container justify='center' xs={6}className={classes.content}>
        <Announcements />
      </Grid>
    </Grid>
  );
};
