import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Divider } from "@material-ui/core";
import {} from "@material-ui/icons";
import smilingDog from "../../assets/smilingDog.jpg";
import { Announcements } from "./Announcements";
import { FeaturedPet } from "./FeaturedPet";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
  },
  picture: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    boxShadow: '8px 0 6px -6px black'
  },
  content: {
    padding: "15px",
  },
  featuredPet: {
    height: '50vh'
  },
  announcements: {
    height: '50vh'
  }
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item container xs={6}>
        <Grid item xs={12} justify="center" alignContent="center" container>
          <img src={smilingDog} alt="smilingDog" className={classes.picture} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify="center"
        direction="column"
        xs={6}
        className={classes.content}
      >
        <Grid item xs className={classes.featuredPet}>
          <FeaturedPet />
        </Grid>
        <Divider />
        <Grid item xs className={classes.announcements}>
          <Announcements />
        </Grid>
      </Grid>
    </Grid>
  );
};
