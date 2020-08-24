import React, { useState } from "react";
import PropTypes from "prop-types";
import groomingDog from "../../../assets/groomingDog.jpg";
import { SpayNeuter } from "./SpayNeuter";
import { LocalVets } from "./LocalVets";
import { GroomingBoarding } from "./GroomingBoarding";
import { LocalShelters } from "./LocalShelters";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Typography, Box, Grid, AppBar, Tab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.Box,
    zIndex: 1,
    width: "100%",
    overflowX: "hidden",
  },
  image: {
    boxShadow: "-8px 0 8px -6px black",
    width: '100vw',
    height: '75vh'
  },
  appBar: {
    width: "100%",
    backgroundColor: "white",
    color: "#ba2214",
    position: "fixed",
  },
  panels: {
    marginTop: "50px",
    padding: '15px'
  },
}));

const resourceGroups = [
  {
    id: "SpayNeuter",
    name: "Low-Cost Spay/Neuter",
  },
  {
    id: "LocalVets",
    name: "Local Vets & Clinics",
  },
  {
    id: "GroomingBoarding",
    name: "Grooming & Boarding",
  },
  {
    id: "LocalShelters",
    name: "Other Local Shelters & Rescue Groups",
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Resources = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root}>
      <Grid item container xs={12}>
        <AppBar position="static" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Grooming / Boarding" {...a11yProps(0)} />
            <Tab label="Local Shelters" {...a11yProps(1)} />
            <Tab label="Local Vets" {...a11yProps(2)} />
            <Tab label="Spay / Neuter" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid container item xs={12}>
        <Grid
          item
          container
          direction="column"
          className={classes.panels}
          xs={6}
        >
          <Typography variant="h4">
            Looking for a groomer, local vet or shelters?
          </Typography>
          <Typography variant="subtitle1">
            Click on the tabs above to explore some great local resources!
          </Typography>
          <TabPanel value={value} index={0}>
            <GroomingBoarding />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <LocalShelters />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <LocalVets />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <SpayNeuter />
          </TabPanel>
        </Grid>
        <Grid item container xs={6}>
          <img
            src={groomingDog}
            alt="dog that needs a groomer"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
