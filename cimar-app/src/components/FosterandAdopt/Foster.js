import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import collage from '../../assets/collage.jpg'
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  main: {
    width: '60%',
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  button: {
    width: '100px'
  },
  collage: {
    maxHeight: '900px',
    paddingRight: '5px'

    
  }
}));

export const Foster = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        direction="column"
        className={classes.main}
        xs={4}
      >
        <Typography variant="h4">
          We are always in need of loving fosters!
           <br />
          <br/>
        </Typography>
        <Typography variant="body1">
          Have you ever thought about fostering a dog or puppy? Maybe not ready
          to Adopt yet, but would like to Foster instead?
          <br />
          <br/>
        </Typography>
        <Typography variant="body2">
          When you foster a dog and bring him/her into you home, you are saving
          a soul that would otherwise not have a chance. Because we rescue dogs
          from high-kill shelters, the chance of them making out alive is very
          slim, if it wasn't for your kindness to open you home to foster.
          Currently we are looking for Fosters. If you would like to Foster, we
          will provide all the essential items (crate, food, puppy pads, medical
          care) if you need these, until we can find your foster dog their
          permanent "forever" home.
          <br />
          <br />
        </Typography>
        <Typography variant="subtitle1">
          Please Remember to contact us should you have any questions!
           <br />
          <br/>
        </Typography>
        <Button component="a" href="/application" className={classes.button}>
          Application
        </Button>
      </Grid>
      <Grid item container justify='flex-end' xs>
        <img src={collage} alt="dogs"className={classes.collage}/>
      </Grid>
    </Grid>
  );
};
