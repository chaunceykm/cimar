import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper, IconButton } from "@material-ui/core";
import { NewReleases, Link } from "@material-ui/icons";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px'
  },
  heading: {
    textAlign: 'center'
  },
}));

export const Announcements = () => {
  const classes = useStyles();
  const [announcementData, setAnnouncementData] = useState();

  useEffect(() => {
    Axios.get("http://localhost:8000/api/announcements").then((response) => {
      const announcements = response.data.announcements;
      const newAnnouncementData = [];
      announcements.map((announcement, index) => {
        newAnnouncementData[index] = {
          id: announcement.id,
          description: announcement.description,
          link: announcement.link,
        };
      });
      setAnnouncementData(newAnnouncementData);
    });
  }, []);

  const getAnnouncements = (announcementObject) => {
    const { id, description, link } = announcementObject;
    return (
      <Paper>
        <Typography variant="subtitle1">
          <NewReleases />
          {description}
        </Typography>
        {link ? (
          <Typography variant="body2">
            Click link for more info!
            <IconButton component="a">
              <Link />
              {link}
            </IconButton>
          </Typography>
        ) : null}
      </Paper>
    );
  };
console.log(announcementData);
  return announcementData ? (
    <Grid container direction='column' className={classes.root}>
      <Typography className={classes.heading} variant='h5'>CiMAR Announcements</Typography>
      {announcementData.map((announcementObject, key) => {
        key = { key };
        return getAnnouncements(announcementObject);
      })}
    </Grid>
  ) : null;
};
