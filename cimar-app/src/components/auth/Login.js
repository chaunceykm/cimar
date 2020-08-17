import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  InputLabel,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

export const Login = () => {
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
      container
      justify="center"
      alignContent="center"
      spacing={2}
      direction="column"
    >
      <Typography>Log In</Typography>
      <Grid item container component="form">
        {error !== null && <div>{error}</div>}
        <InputLabel htmlFor="userEmail" className="block">
          Email:
        </InputLabel>
        <TextField
          type="email"
          className=""
          name="userEmail"
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
          className=""
          name="userPassword"
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
