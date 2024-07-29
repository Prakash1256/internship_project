import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ContactUs() {
  return (
    <Container>
      <h1>Contact Us</h1>
      <p>
        <strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code<br />
        <strong>Phone:</strong> +1 (123) 456-7890<br />
        <strong>Email:</strong> <a href="mailto:info@springdale.edu">info@springdale.edu</a>
      </p>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your message" />
        </Form.Group>
        <Button variant="primary" type="submit">Send</Button>
      </Form>
      <h2>Find Us On The Map</h2>
      <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=Springdale%20Public%20School,%20123%20Education%20Lane,%20Cityville,%20State,%20ZIP%20Code&key"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </Container>
  );
}

export default ContactUs;
