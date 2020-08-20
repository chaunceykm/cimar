import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  Typography,
  FormGroup,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  SvgIcon,
  Icon,
  IconButton,
  Button,
  GridListTile,
  ListSubheader,
  GridList,
  GridListTileBar,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Avatar,
} from "@material-ui/core";
import { Favorite, House, Info } from "@material-ui/icons";
import cat from "../../assets/cat.png";
import dog from "../../assets/dog.png";
import children from "../../assets/children.png";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
  searches: {
    height: "100vh",
    padding: "10px",
    borderRight: "2px solid lightgray",
  },
  gallery: {
    paddingLeft: "20px",
    paddingTop: "5px",
  },
  gridList: {
    height: "100vh",
  },
  media: {
    maxHeight: "150px",
  },
  icon: {
    color: "black",
  },
}));

function CatIcon(props) {
  return (
    <SvgIcon {...props}>
      <path m={cat} />
    </SvgIcon>
  );
}
function DogIcon(props) {
  return (
    <SvgIcon {...props}>
      <path m={dog} />
    </SvgIcon>
  );
}

function ChildrenIcon(props) {
  return (
    <SvgIcon {...props}>
      <path m={children} />
    </SvgIcon>
  );
}

export const Gallery = () => {
  const classes = useStyles();
  const history = useHistory();

  const [sex, setSex] = useState("noPreference");
  const [age, setAge] = useState({
    noPreference: true,
    puppy: false,
    youngAdult: false,
    adult: false,
    senior: false,
  });
  const [size, setSize] = useState({
    noPreference: true,
    small: false,
    medium: false,
    large: false,
  });

  const handleSexChange = (event) => {
    event.preventDefault();
    setSex(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge({ ...age, [event.target.name]: event.target.checked });
  };
  const handleSizeChange = (event) => {
    setSize({ ...size, [event.target.name]: event.target.checked });
  };

  const [petData, setPetData] = useState();

  useEffect(() => {
    Axios.get("http://localhost:8000/api/pets").then((response) => {
      const pets = response.data.pets;
      const newPetData = [];
      pets.map((pet, index) => {
        newPetData[index] = {
          id: pet.id,
          name: pet.name,
          sex: pet.sex,
          age: pet.age,
          breed: pet.breed,
          status: pet.status,
          size: pet.size,
          photos: pet.photos,
          houseBroken: pet.houseBroken,
          healthConcerns: pet.healthConcerns,
          goodWithCats: pet.goodWithCats,
          goodWithDogs: pet.goodWithDogs,
          goodWithChildren: pet.goodWithChildren,
        };
      });
      setPetData(newPetData);
    });
  }, []);

  const getPet = (petObject) => {
    const {
      id,
      name,
      sex,
      age,
      breed,
      status,
      size,
      photos,
      houseBroken,
      healthConcerns,
      goodWithCats,
      goodWithChildren,
      goodWithDogs,
    } = petObject;
    console.log(petObject);
    return (
      <Grid item xs={12} sm={3}>
        <Card onClick={() => history.push(`/pets/${id}`)}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              alt={name}
              height="140"
              image={photos ? photos[0] : "../../assets/dog.png"}
              title={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="p">
                {name}
              </Typography>
              <Typography>Status: {status}</Typography>
              <Typography>Sex: {sex}</Typography>
              <Typography>Age: {age}</Typography>
              <Typography>Size: {size}</Typography>
              <Typography>Breed: {breed}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {healthConcerns === true ? (
              <Favorite className={classes.icon} />
            ) : null}
            {houseBroken === true ? <House /> : null}
            {goodWithDogs === true ? (
              <Icon className={classes.icon}>
                <img src={dog} alt="good with dogs" />
              </Icon>
            ) : null}
            {goodWithCats === true ? (
              <Icon className={classes.icon}>
                <img src={cat} alt="good with cats" />
              </Icon>
            ) : null}
            {goodWithChildren === true ? (
              <Icon className={classes.icon}>
                <img src={children} alt="good with children" />
              </Icon>
            ) : null}
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return petData ? (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        direction="column"
        className={classes.searches}
        xs={2}
      >
        <Typography variant="subtitle1">Filter Results</Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">Sex</FormLabel>
          <RadioGroup
            aria-label="sex"
            name="sex"
            value={sex}
            onChange={handleSexChange}
          >
            <FormControlLabel
              value="noPreference"
              control={<Radio color="primary" />}
              label="No Preference"
            />
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              label="Male"
            />
          </RadioGroup>
          <FormGroup>
            <FormLabel component="legend">Age</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={age.noPreference}
                  onChange={handleAgeChange}
                  name="noPreference"
                  color="primary"
                />
              }
              label="No Preference"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={age.puppy}
                  onChange={handleAgeChange}
                  name="puppy"
                  color="primary"
                />
              }
              label="Puppy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={age.youngAdult}
                  onChange={handleAgeChange}
                  name="youngAdult"
                  color="primary"
                />
              }
              label="Young Adult"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={age.adult}
                  onChange={handleAgeChange}
                  name="adult"
                  color="primary"
                />
              }
              label="Adult"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={age.senior}
                  onChange={handleAgeChange}
                  name="senior"
                  color="primary"
                />
              }
              label="Senior"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel component="legend">Size</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={size.noPreference}
                  onChange={handleSizeChange}
                  name="noPreference"
                  color="primary"
                />
              }
              label="No Preference"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={size.small}
                  onChange={handleSizeChange}
                  name="small"
                  color="primary"
                />
              }
              label="Small"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={size.medium}
                  onChange={handleSizeChange}
                  name="medium"
                  color="primary"
                />
              }
              label="Medium"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={size.large}
                  onChange={handleSizeChange}
                  name="large"
                  color="primary"
                />
              }
              label="Large"
            />
          </FormGroup>
          <Button>Apply Search Filters</Button>
        </FormControl>
      </Grid>
      <Grid item container className={classes.gallery} xs={10} spacing={2}>
        {petData.map((petObject, key) => {
          key = { key };
          return getPet(petObject);
        })}
      </Grid>
    </Grid>
  ) : null;
};
