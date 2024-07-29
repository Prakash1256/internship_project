import React from 'react';
import { Container } from 'react-bootstrap';

function Students() {
  return (
    <Container>
      <h1>Students</h1>
      <img 
        style={{
          width: "100%",
          height: "400px"
        }}
        src='https://plus.unsplash.com/premium_photo-1663088595346-3fd01c0326bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Student Life'
      />
      <h2>Life at Springdale:</h2>
      <p>
        <strong>Extracurricular Activities:</strong> Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club<br />
        <strong>Clubs and Societies:</strong> Literary Society, Environmental Club, Astronomy Club, Coding Club<br />
        <strong>Achievements:</strong><br />
        - <strong>John Smith:</strong> National Level Math Olympiad Winner<br />
        - <strong>Sarah Lee:</strong> Gold Medalist in State Swimming Championship<br />
        - <strong>Tech Innovators Club:</strong> Winners of Inter-School Robotics Competition<br />
        <strong>Student Council:</strong><br />
        - <strong>President:</strong> Amy Parker, Grade 12<br />
        - <strong>Vice President:</strong> Rajiv Mehta, Grade 11<br />
        - <strong>Secretary:</strong> Lisa Wong, Grade 10
      </p>
    </Container>
  );
}

export default Students;
