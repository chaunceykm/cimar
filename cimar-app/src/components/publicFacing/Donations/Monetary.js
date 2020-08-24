import React from "react";
import Paypal from '../../../assets/paypal.jpg';
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

export const Monetary = () => {
  const classes = useStyles();
  return (
    <div className= 'monetary__wrapper'>
      <h2>Monetary Donations Directly to CiMAR</h2>
      <p>
        All monetary donations are used for veterinary and daily care of all
        CiMAR dogs and cats. <br/> Donations can be made online through PayPal using
        the button below.
      </p>
      <div className='monetary__paypal'>
        <a href="https://www.paypal.com/donate/?token=KzRSreA2nNEi99rssrm3v1v-SBS7TNRokBz8ibYhSp-HgcV9wv_-fTP3uOHEUwKffek6LW&country.x=US&locale.x=">
          <img src={Paypal} alt="paypal logo" />
        </a>
      </div>
      <div className='monetary__check-info'>
        <h3>You can also send a check or money order via mail to:</h3>
        <p>Cuz i Matter Animal Rescue <br/>P.O. Box 3751 <br/>Pflugerville, TX 78691</p>
      </div>
    </div>
  );
};
