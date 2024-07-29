import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function ContactUs() {
  return (
    <Container>
      <h1>Contact Us</h1>
      <p>School’s address, contact numbers, email.</p>
      <Form>
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
      <MapContainer style={{ height: '400px', width: '100%' }} center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]} />
      </MapContainer>
    </Container>
  );
}

export default ContactUs;
