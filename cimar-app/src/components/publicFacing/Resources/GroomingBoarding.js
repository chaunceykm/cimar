import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List, ListItem, ListItemText, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px'
  },
  listLinks: {
    color: theme.palette.primary.main,
  },
}));

const groomersAndBoarders = [
  {
    id: 1,
    name: "All God's Creatures Grooming",
    url:
      "https://www.facebook.com/pages/category/Pet-Groomer/All-Gods-Creatures-213426098682797/",
  },
  {
    id: 2,
    name: "Camp Bow Wow Dog Daycare and Dog Boarding",
    url: "http://www.campbowwow.com/austin",
  },
  {
    id: 3,
    name: "DogBoy's Dog Ranch - Training, Daycare, and Boarding",
    url: "http://www.dogboys.com/",
  },
  { id: 4, name: "K & A Grooming", url: "http://www.kagrooming.com/" },
  {
    id: 5,
    name: "Puppie Luv Pet Grooming",
    url: "https://www.512puppylove.com/",
  },
];
export const GroomingBoarding = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <List className={classes.listItem}>
        {groomersAndBoarders.map(({ id, name, url }) => (
          <ListItem key={id}>
            <Link
              href={url}
              target="_blank"
              rel="noreferrer"
              className={classes.listLinks}
            >
              {name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
