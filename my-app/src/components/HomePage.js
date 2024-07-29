import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';


function HomePage() {
  return (
    <Container fluid className="carousel-container p-0 m-0">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Springdale Public School, where we nurture young minds for a brighter future</h3>
            <p>"Annual Sports Day - Celebrating Excellence in Sports"
"Science Exhibition - Showcasing Student Innovations"
"Cultural Fest - Embracing Diversity and Creativity"
</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1610894496955-2eb9fb12d2a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Springdale Public School, where we nurture young minds for a brighter future</h3>
            <p>"Annual Sports Day - Celebrating Excellence in Sports"
"Science Exhibition - Showcasing Student Innovations"
"Cultural Fest - Embracing Diversity and Creativity"
</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Springdale Public School, where we nurture young minds for a brighter future</h3>
            <p>"Annual Sports Day - Celebrating Excellence in Sports"
"Science Exhibition - Showcasing Student Innovations"
"Cultural Fest - Embracing Diversity and Creativity"
</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
</Container>
  );
}

export default HomePage;
