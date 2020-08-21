import React from "react";
import { Header } from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Button,
  Grid,
} from "@material-ui/core";
import { Facebook } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    width: "100vw",
    background: "white",
    zIndex: 998,
  },

  list: {
    display: "inline-flex",
  },
  listItem: {
    whiteSpace: "nowrap",
    "& span, & svg": {
      fontSize: "1.2rem",
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
          <Grid item container xs={8}>
            <List className={classes.list}>
              <ListItem>
                <a href="/">
                  <ListItemText className={classes.listItem} primary="Home" />
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
                  <ListItemText
                    className={classes.listItem}
                    primary="Happy Tails"
                  />
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
                <a href="/about">
                  <ListItemText
                    className={classes.listItem}
                    primary="About Us"
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
          <Grid container  item xs={4}>
            <ListItem style={{justifyContent: 'flex-end'}}>
              <Button
                component="a"
                className={classes.listItem}
                
                href="https://wwww.facebook.com/cuzimatteranimalrescue/?ref=br_rs"
                target="_blank"
              >
                <Facebook className={classes.listItem} />
                Visit us on Facebook!
              </Button>
            </ListItem>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
