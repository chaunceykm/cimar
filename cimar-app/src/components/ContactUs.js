import React, { useState } from 'react'
import * as emailjs from "emailjs-com";

export const ContactUs = () => {
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
    const { name, value } = e.target;
    setMessageData({ ...messageData, [name]: value });
  };
  return (
    <div className="contact__container">
      <p className="contact__message">
        Please allow up to 24 hours for a reply. We look forward to speaking
        with you!
      </p>
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={messageData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required={true}
          />
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={messageData.email}
            onChange={handleChange}
            placeholder="name@email.com"
            required={true}
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={messageData.subject}
            onChange={handleChange}
            placeholder="ex: Adoption question"
            required={true}
          />

          <label>Message</label>
          <textarea
            placeholder="Enter message here ..."
            name="message"
            value={messageData.message}
            onChange={handleChange}
            required={true}
          />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
