import React, { useState } from "react";
import { Header } from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Grid,
} from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import logo from "../../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    width: "100vw",
    background: 'white',
    zIndex: 998
  },

  list: {
    display: "inline-flex",
  },
  listItem: {
    whiteSpace: "nowrap",
    "& span, & svg": {
      fontSize: "1.5rem",
      },
  },
  
  
}));

export const NavBar = () => {
  const classes = useStyles();
  return (
    <Grid component="nav" className={classes.root}>
      <Header />

      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Grid item container xs={12} justify="space-around">
            <List className={classes.list}>
              <ListItem>
                <a href="/">
                  <ListItemText className={classes.listItem} primary="Home" />
                </a>
              </ListItem>
              <ListItem>
                <a href="/about">
                  <ListItemText
                    className={classes.listItem}
                    primary="About Us"
                  />
                </a>
              </ListItem>

              <ListItem>
                <a href="/pets">
                  <ListItemText
                    className={classes.listItem}
                    primary="Available Pets"
                  />
                </a>
              </ListItem>

              <ListItem>
                <a href="/adopt">
                  <ListItemText className={classes.listItem} primary="Adopt" />
                </a>
              </ListItem>

              <ListItem>
                <a href="/foster">
                  <ListItemText className={classes.listItem} primary="Foster" />
                </a>
              </ListItem>
              <ListItem>
                <a href="/happy-tails">
                  <ListItemText className={classes.listItem} primary="Happy Tails" />
                </a>
              </ListItem>

              <ListItem>
                <a href="/donate">
                  <ListItemText className={classes.listItem} primary="Donate" />
                </a>
              </ListItem>

              <ListItem>
                <a href="/events">
                  <ListItemText className={classes.listItem} primary="Events" />
                </a>
              </ListItem>

              <ListItem>
                <a href="/resources">
                  <ListItemText
                    className={classes.listItem}
                    primary="Resources"
                  />
                </a>
              </ListItem>

              <ListItem>
                <a href="/contact">
                  <ListItemText
                    className={classes.listItem}
                    primary="Contact Us"
                  />
                </a>
              </ListItem>
            </List>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
