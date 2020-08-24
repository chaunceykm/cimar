import React from "react";
import PetMed1 from "../../../assets/petmeds1.png";
import PetMed2 from "../../../assets/petmeds2.png";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Icon,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},
  links: {
    color: "#ba2214",
  },
  image: {},
  heading: {},
}));

export const PetMeds = () => {
  const classes = useStyles();
  return (
    <div className="petMeds_container">
      <div className="petMeds__content-wrapper">
        <div className="petMeds__picture_card">
          <a href="http://www.petmeds.com/cuzimatter">
            <img src={PetMed1} alt="petMeds information flyer" />
            <img src={PetMed2} alt="petMeds information flyer" />
          </a>
        </div>
        <div className="petMeds__method-text">
          <h3>
            You can help CiMAR by using this link to order from PetMeds.com!
          </h3>
          <p>
            Click on the picture or the link below for a portion of your
            purchase to be donated to CiMAR!
          </p>
          <p>
            Click  {' '}
            <a
              className={classes.links}
              href="http://www.petmeds.com/cuzimatter"
            >
              HERE
            </a>{" "}
            to use our special link.
          </p>
          <p>
            For every new customer that uses this link, PetMeds.com will donate
            $20 to CiMAR and you will get a 25% discount on your first order!
          </p>
        </div>
      </div>
    </div>
  );
};
