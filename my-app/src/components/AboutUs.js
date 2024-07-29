import React from 'react';
import { Container } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container>
      <h1>About Us</h1>
      <img
        style={{
          width: "100%",
          height: "350px"
        }}
        src='https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='About Us'
      />
      <h2>Learn about our history, vision, mission, and values.</h2>
      <p>
        <strong>History:</strong> "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students."
      </p>
      <p>
        <strong>Vision:</strong> "To create a learning environment that fosters academic excellence, critical thinking, and ethical values."
      </p>
      <p>
        <strong>Mission:</strong> "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world."
      </p>
      <p>
        <strong>Principal's Message:</strong> "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."
      </p>
      <p>
        <strong>Infrastructure and Facilities:</strong>
        <ul>
          <li>"State-of-the-art science and computer labs"</li>
          <li>"Spacious and well-equipped classrooms"</li>
          <li>"Library with a vast collection of books and digital resources"</li>
          <li>"Sports facilities including a playground, gymnasium, and swimming pool"</li>
        </ul>
      </p>
    </Container>
  );
}

export default AboutUs;
