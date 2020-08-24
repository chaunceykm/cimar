import React from 'react'
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

export const Sponsorship = () => {
   const classes = useStyles();
  return (
    <div className="sponsorship__info">
      <h2>Sponsor a Special Dog</h2>
      <p>
        Is there a certain dog that tugs at your heart strings but you cannot
        adopt? Help him or her find their 'furever' home by sponsoring them.{" "}
        <br /> By sponsoring a pet, you help CiMAR cover veterinary bills,
        medical costs, food and other daily care costs.
      </p>
      <p>
        Check out our{" "}
        <a className={classes.links} href="/pets">
          adoptable dogs
        </a>
        , or
        <a className={classes.links} href="/contact">
          {" "}
          contact us
        </a>{" "}
        with any questions!
      </p>
    </div>
  );
}
