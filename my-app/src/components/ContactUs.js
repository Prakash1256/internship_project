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
      <div style={{ width: '100%', height: '450px', marginTop: '20px' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1810729.3303529397!2d77.92490353134625!3d27.575519987763997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975e078e85c0581%3A0xd51414d7d75eb2c6!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sin!4v1722243627130!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
}

export default ContactUs;
