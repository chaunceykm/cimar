import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  InputLabel,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
  paddingTop: '60px'
}
}))

export const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };
  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignContent="center"
      spacing={3}
      direction="column"
    >
      <Grid item container component="form" direction='column' xs={4}>
        {error !== null && <div>{error}</div>}
        <InputLabel htmlFor="userEmail" className="block">
          Email:
        </InputLabel>
        <TextField
          type="email"
          className={classes.input}
          name="userEmail"
          margin='dense'
          value={email}
          placeholder="E.g: jdoe@gmail.com"
          id="userEmail"
          onChange={(event) => onChangeHandler(event)}
        />
        <InputLabel htmlFor="userPassword" className="block">
          Password:
        </InputLabel>
        <TextField
          type="password"
          className={classes.input}
          name="userPassword"
          margin='dense'
          value={password}
          placeholder="Your Password"
          id="userPassword"
          onChange={(event) => onChangeHandler(event)}
        />
        <Button
          className=""
          onClick={(event) => {
            signInWithEmailAndPasswordHandler(event, email, password);
          }}
        >
          Sign in
        </Button>

        <Link to="/passwordReset" className="">
          Forgot Password?
        </Link>
      </Grid>
    </Grid>
  );
};
