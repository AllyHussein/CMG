import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Form.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE1_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsSent(true);
        setIsSending(false);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setError(
          "An error occurred while sending the email. Please try again later."
        );
        setIsSending(false);
      });
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE2_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsSent(true);
        setIsSending(false);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setError(
          "An error occurred while sending the email. Please try again later."
        );
        setIsSending(false);
      });
  };

  return (
    <div className="formContainer">
      {isSent ? (
        <p style={{ color: "#5f6973", fontSize: "35px" }}>
          Thank you for your message!
        </p>
      ) : (
        <Form ref={form} onSubmit={handleSubmit}>
          <div className="formSection">
            <Form.Group className="my-3">
              <Form.Label className="formLabel">Your Name</Form.Label>
              <Form.Control
                value={name}
                name="name"
                type="text"
                placeholder="Full Name"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label className="formLabel">Email address</Form.Label>
              <Form.Control
                value={email}
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </Form.Group>
          </div>

          <div className="formSection">
            <Form.Group className="my-3">
              <Form.Label className="formLabel">Phone Number</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]+"
                placeholder="Optional"
              />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label className="formLabel">Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="New Project"
                value={subject}
                name="subject"
                onChange={(event) => setSubject(event.target.value)}
                required
              />
            </Form.Group>
          </div>

          <Form.Group className="my-3">
            <Form.Label className="formLabel">Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={message}
              name="message"
              placeholder="Tell Us More About Your Project"
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="my-4" controlId="formBasicCheckbox">
            <Form.Check
              className="formLabel"
              type="checkbox"
              label="I am bound by the terms of the Service I accept Privacy Policy"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </Form.Group>
          <Button
            className="formBtn"
            type="submit"
            disabled={isSending || !checked}
          >
            {isSending ? "Sending..." : "Send Message"}
          </Button>
          {error && <p>{error}</p>}
        </Form>
      )}
    </div>
  );
}

export default ContactForm;
