import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import logo from "../assets/logo.png";
import lostPets from "../assets/lostPetUSA.png";
import bissell from "../assets/bissel.png";
import tomlinsons from "../assets/tomlinsons.png";

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    left: 0,
    right: 0,
    background: "#2b2e2c",
    position: 'absolute',
    width: '100vw'
  },
  image: {
    maxHeight: "50px",
    maxWidth: "75px",
  },
  partners: {},
  partnerPic: { maxWidth: "100px", padding: "10px" },
  text: { color: "white" },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container component="footer" className={classes.root}>
      <Grid item container justify="center">
        <Typography className={classes.text}>
          &#169; 2020 "Cuz i Matter" Animal Rescue | P.O. Box 3751,
          Pflugerville, TX 78691
        </Typography>
      </Grid>

      {/* <Grid
        item
        container
        justify="center"
        alignContent="center"
        className={classes.partners}
      >
        <a href="http://www.lostpetusa.net/home">
          <img
            src={lostPets}
            alt="Lost Pet USA logo"
            className={classes.partnerPic}
          />
        </a>
        <a href="https://www.bissell.com/pets/partners-for-pets.html">
          <img
            src={bissell}
            alt="bissell icon"
            className={classes.partnerPic}
          />
        </a>
        <a href="http://www.tomlinsons.com">
          <img
            src={tomlinsons}
            alt="tomlinsons pet supply logo"
            className={classes.partnerPic}
          />
        </a>
      </Grid> */}
    </Grid>
  );
};
