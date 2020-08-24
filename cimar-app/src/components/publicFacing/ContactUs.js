import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  TextareaAutosize,
  InputLabel,
  Button,
  Typography,
} from "@material-ui/core";
import {} from "@material-ui/icons";
import agent from "../../assets/agentDog.jpg";

const useStyles = makeStyles((theme) => ({
  root: {

  },
  heading: {
    textAlign: 'center'
  },
  formContainer: {
    padding: '20px'
  },
  form: {
    width: "600px",
  },
}));

export const ContactUs = () => {
  const classes = useStyles();
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const resetform = () => {
    setMessageData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = messageData;
    let templateParams = {
      from_name: name,
      to_name: "cimar.dev@gmail.com",
      reply_to: email,
      subject: subject,
      message_html: message,
    };
    emailjs
      .send("gmail", "cimar", templateParams, "user_foHltxJ2QIQDYQf7V9ztY")
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") alert("We have received your message");
        },
        (error) => {
          console.log(error.text);
          if (error)
            alert(
              "There was an error in submitting the form. Please try again."
            );
        }
      );
    resetform();
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setMessageData({ ...messageData, [id]: value });
  };
  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} className={classes.image}>
        <img src={agent} alt="agent dog" />
      </Grid>

      <Grid
        item
        container
        xs={8}
        justify="center"
        className={classes.formContainer}
      >
        <Grid
          item
          container
          direction="column"
          component="form"
          onSubmit={handleSubmit}
          className={classes.form}
        >
          <Typography variant="subtitle1" className={classes.heading}>
            Our agents are sitting pretty and waiting to hear from you. Please
            allow up to 24 hours for a reply. We look forward to speaking with
            you!
          </Typography>
          <InputLabel htmlFor="name">Name</InputLabel>
          <TextField
            type="text"
            id="name"
            value={messageData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
            variant="outlined"
          />
          <InputLabel htmlFor="email">Email</InputLabel>

          <TextField
            type="email"
            id="email"
            value={messageData.email}
            onChange={handleChange}
            placeholder="name@email.com"
            required
            variant="outlined"
          />
          <InputLabel htmlFor="subject">Subect</InputLabel>

          <TextField
            type="text"
            id="subject"
            value={messageData.subject}
            onChange={handleChange}
            placeholder="ex: Adoption question"
            required
            variant="outlined"
          />
          <InputLabel htmlFor="message">Message</InputLabel>

          <TextareaAutosize
            id="message"
            value={messageData.message}
            onChange={handleChange}
            required
            rowsMin={6}
            variant="outlined"
          />
          <Button type="submit">Submit</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
