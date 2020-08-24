import React from "react";
import Bones from "../../../assets/dogbones.jpg";
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

export const Items = () => {
  const classes = useStyles();
  return (
    <div className="items_container">
      <div className="items__content-wrapper">
        <div className="picture_card">
          <img src={Bones} alt="assorted dog bones" />
          <div className="picture_card__text">
            <p>It takes a lot of stuff to keep our animals happy!</p>
          </div>
        </div>
        <div className="items__list-wrapper">
          <h3>Can I donate items instead?</h3>
          <p>
            We are always in need of supplies to care for the animals we rescue.
            <br /> Please take a look at our wish list below or check out our
            wish list on{' '}
            <a
              className={classes.links}
              href="https://www.amazon.com/gp/registry/wishlist/139F95Z2BKCKW/ref=cm_sw_su_w"
            >
              Amazon
            </a>
            . <br /> You can also{" "}
            <a className={classes.links} href="/contact">
              contact us
            </a>{" "}
            for information on other needs.
          </p>
          <h4>Dog & Puppy Needs</h4>

          <div>
            <ul>
              <li>Puppy Food (dry and canned)</li>
              <li>Adult Dog Food (dry and canned)</li>
              <li>Puppy training pads</li>
              <li>Training Treats</li>
              <li>Paper Towel Rolls</li>
              <li>Dog Chew Toys (adult and puppy)</li>
              <li>Rawhide Chews</li>
              <li>Towels, Blankets, & Dog Beds</li>
              <li>Puppy Harnesses & Leashes</li>
              <li>Poop Bags</li>
              <li>Flea Preventatives</li>
              <li>Kiddie Pools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
