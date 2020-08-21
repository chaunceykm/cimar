import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Typography, Box, Grid, AppBar, Tab } from "@material-ui/core";
import { AmazonSmile } from "./AmazonSmile";
import { PetMeds } from "./PetMeds";
import { Monetary } from "./Monetary";
import { Sponsorship } from "./Sponsorship";
import { Items } from "./Items";
import thankyouDog from '../../assets/thankYouDog.jpg'

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    zIndex: 1,
  },
  image: {
    boxShadow: "-8px 0 8px -6px black",
  },
  appBar: {
    width: '100%'
  }
}));

export const Donate = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Amazon Smile" {...a11yProps(0)} />
          <Tab label="PetMeds.com" {...a11yProps(1)} />
          <Tab label="Monetary" {...a11yProps(2)} />
          <Tab label="Sponsorship" {...a11yProps(3)} />
          <Tab label="Items We Need" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <Grid container item xs={12}>
        <Grid item container xs={6}>
          <TabPanel value={value} index={0}>
            <AmazonSmile />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PetMeds />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Monetary />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Sponsorship />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Items />
          </TabPanel>
        </Grid>
        <Grid item container xs={6} >
          <img src={thankyouDog} alt="dog with thank you card" className={classes.image}/>
        </Grid>
      </Grid>
    </Grid>
  );
};
