import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List, ListItem, ListItemText, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
  },
  listLinks: {
    color: theme.palette.primary.main,
  },
}));

const localShelters = [
  {
    id: 1,
    name: "Austin Animal Center (AAC)",
    url: "http://www.austintexas.gov/department/animal-services",
  },
  {
    id: 2,
    name: "Austin Humane Society",
    url: "http://www.austinhumanesociety.org/",
  },
  {
    id: 3,
    name: "Austin Pets Alive",
    url: "http://www.austinpetsalive.org/",
  },
  {
    id: 4,
    name: "Austin Wildlife Rescue",
    url: "http://www.austinwildliferescue.org/",
  },
  {
    id: 5,
    name: "Georgetown Animal Shelter",
    url: "https://pets.georgetown.org/",
  },
  {
    id: 6,
    name: "House Rabbit Resource Network",
    url: "http://rabbitresource.org/",
  },
  {
    id: 7,
    name: "Pflugerville Animal Shelter",
    url: "http://www.pflugervilletx.gov/index.aspx?NID=1417",
  },
  {
    id: 8,
    name: "Pflugerville Pets Alive",
    url: "http://pflugervillepetsalive.org/",
  },
  {
    id: 9,
    name: "Pflugerville's Pfurry Pfriends",
    url: "http://www.pflugervillepfurrypfriends.org/",
  },
  {
    id: 10,
    name: "Purrfect Pals Rescue",
    url: "http://www.purrfectpalsrescue.com/index.html",
  },
  {
    id: 11,
    name: "Texas Humane Heroes (formerly HSWC)",
    url: "https://www.texashumaneheroes.org/",
  },
  {
    id: 12,
    name: "Williamson County Regional Animal Shelter",
    url: "http://pets.wilco.org/",
  },
];

export const LocalShelters = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <List className={classes.listItem}>
        {localShelters.map(({ id, name, url }) => (
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
}
