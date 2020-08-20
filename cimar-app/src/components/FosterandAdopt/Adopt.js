import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  Button,
  Typography,
} from "@material-ui/core";
import {} from "@material-ui/icons";
import smilingDog from "../../assets/smilingDog.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    height: "225px",
    width: "100%",
    boxShadow: "0 8px 6px -6px black",
  },
  heading: {
    textAlign: "center",
  },
  section1: {
    width: "70%",
    borderRight: "2px solid gray",
  },
  section2: {
    borderRight: "2px solid gray",
  },
  section3: {},
}));

export const Adopt = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Grid item component="header" xs={12}>
        <img src={smilingDog} alt="happy dog" className={classes.header} />
      </Grid>
      <Grid container item xs={12} justify="center">
        <Typography className={classes.heading} variant="h4">
          Adopting With Cuz i Matter
        </Typography>
      </Grid>
      <Grid container item xs={12} spacing={4}>
        <Grid container item xs={4} justify='center' alignContent='center' className={classes.section1}>
          <Typography variant="body1">
            When you adopt a pet from a shelter or rescue organization, you save
            lives. For every dog you adopt from us, we are able to save at least
            one more animal. Not to mention, by adopting, you become a hero to
            that one animal, and that just feels good.
          </Typography>
        </Grid>
        <Grid container justify='center' alignContent='center' item xs={4} className={classes.section2}>
          <Typography variant="body1">
            At CiMAR, we do our best to ensure healthy, adoptable animals by
            providing a pre-adoption assessment and veterinary care. Each pet
            you adopt from us is:
          </Typography>
          <List>
            <ListItem>de-wormed</ListItem>
            <ListItem>current on vaccines</ListItem>
            <ListItem>spayed or neutured</ListItem>
            <ListItem>tested for heartworms</ListItem>
            <ListItem>microchipped</ListItem>
          </List>
          <Typography variant="body1">
            We assess each animals temperament to the best of our ability, and
            provide as much information as possible regarding the animal
            behavior and personality to ensure the best match for you and for
            them. Check out our adoptable dogs, then send us a message if you
            would like to meet them.
          </Typography>
        </Grid>
        <Grid container item xs={4} justify='center' alignContent='center' className={classes.section3}>
          <Typography variant="body1">
            If you already have a dog in mind, click below to start the
            application process. Otherwise, feel free to check out our Available
            Dogs. <br />
            You'll be able to see if they are available right now, if an
            application is pending or if they are available for pre-adoption.
            <br />
            <br/>
            Keep in mind that we do take back up applications for dogs marked as
            "Adoption Pending".
          </Typography>
          <Button component='a' href='/application'>Application</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
