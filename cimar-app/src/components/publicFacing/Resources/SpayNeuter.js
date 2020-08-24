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

const clinics = [
  {
    id: 1,
    name: "Animal Trustees of Austin (ATA)",
    url: "http://www.animaltrustees.org/",
  },
  {
    id: 2,
    name: "Emancipet - Low-Cost Spay/Neuter Services",
    url: "http://emancipet.org/",
  },
];
export const SpayNeuter = () => {
  const classes = useStyles();
  
  return (
    <Grid className={classes.root}>
      <List className={classes.listItem}>
        {clinics.map(({ id, name, url }) => (
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
