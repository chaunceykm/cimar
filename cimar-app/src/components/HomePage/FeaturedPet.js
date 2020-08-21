import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper, IconButton } from "@material-ui/core";
import { Star, Link } from "@material-ui/icons";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px",
  },
  heading: {
    textAlign: 'center'
  },
}));

export const FeaturedPet = () => {
  const [featuredPetData, setFeaturedPetData] = useState();

  useEffect(() => {
    Axios.get("http://localhost:8000/api/featuredPets").then((response) => {
      const featuredPets = response.data.featuredPets;
      const newFeaturedPetData = [];
      featuredPets.map((featuredPet, index) => {
        newFeaturedPetData[index] = {
          id: featuredPet.id,
          petId: featuredPet.petId,
          petName: featuredPet.petName,
          description: featuredPet.description,
          photo: featuredPet.photo,
        };
      });
      setFeaturedPetData(newFeaturedPetData);
    });
  }, []);

  const getFeaturedPet = (featuredPetDataObject) => {
    const { id, petId, petName, description, photo } = featuredPetDataObject;
    const profileLink = `/pets/${petId}`;
    return (
      <Paper>
        <Typography variant="subtitle1">
          <Star />
          {petName}
        </Typography>
        <img src={photo} alt={petName} />
        <Typography variant="body1">{description}</Typography>
        <Typography variant="subtitle2">
          Click link to visit {petName}'s profile.
          <IconButton component="a" href={profileLink}>
            <Link />
          </IconButton>
        </Typography>
      </Paper>
    );
  };

  const classes = useStyles();
  return featuredPetData ? (
    <Grid container direction='column' className={classes.root}>
      <Typography className={classes.heading} variant="h5">
        Featured Pet
      </Typography>
      {featuredPetData.map((featuredPetDataObject, key) => {
        key = { key };
        return getFeaturedPet(featuredPetDataObject);
      })}
    </Grid>
  ) : null;
};
