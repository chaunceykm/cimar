import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List, ListItem, Button, Typography } from "@material-ui/core";
import {Check} from "@material-ui/icons";
import hank from "../../assets/hank.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    height: "100%",
    width: "100%",
    boxShadow: "8px 0 6px -6px black",
  },
  heading: {
    textAlign: "center",
  },
  button: {
    width: '100px'
  },
  main: {
    padding: '30px'
  }
}));

export const Adopt = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Grid item xs={6}>
        <img src={hank} alt="happy dog" className={classes.image} />
      </Grid>
      <Grid
        item
        container
        xs={6}
        spacing={2}
        direction="column"
        alignContent="center"
        className={classes.main}
      >
        <Typography className={classes.heading} variant="h4">
          Adopting With Cuz i Matter
        </Typography>

        <Typography variant="body1">
          When you adopt a pet from a shelter or rescue organization, you save
          lives. For every dog you adopt from us, we are able to save at least
          one more animal. Not to mention, by adopting, you become a hero to
          that one animal, and that just feels good.
          <br />
          <br/>
        </Typography>

        <Typography variant="body2">
          At CiMAR, we do our best to ensure healthy, adoptable animals by
          providing a pre-adoption assessment and veterinary care. Each pet you
          adopt from us is:
        </Typography>
        <List>
          <ListItem><Check />de-wormed</ListItem>
          <ListItem><Check />current on vaccines</ListItem>
          <ListItem><Check />spayed or neutured</ListItem>
          <ListItem><Check />tested for heartworms</ListItem>
          <ListItem><Check />microchipped</ListItem>
        </List>
        <Typography variant="body2">
          We assess each animals temperament to the best of our ability, and
          provide as much information as possible regarding the animal behavior
          and personality to ensure the best match for you and for them. Check
          out our adoptable dogs, then send us a message if you would like to
          meet them.
        </Typography>

        <Typography variant="body2">
          If you already have a dog in mind, click below to start the
          application process. Otherwise, feel free to check out our Available
          Dogs. <br />
          You'll be able to see if they are available right now, if an
          application is pending or if they are available for pre-adoption.
          <br />
          <br />
          Keep in mind that we do take back up applications for dogs marked as
          "Adoption Pending".
        </Typography>
        <Button component="a" href="/application" className={classes.button}>
          Application
        </Button>
      </Grid>
    </Grid>
  );
};
