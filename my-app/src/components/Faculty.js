import React from 'react';
import { Container } from 'react-bootstrap';

function Faculty() {
  return (
    <Container>
      <h1>Faculty</h1>
      <img 
        style={{
          width: "100%",
          height: "400px"
        }}
        src='https://images.unsplash.com/photo-1576267423429-569309b31e84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Faculty Team'
      />
      <p>
        <strong>John Doe:</strong> Principal, M.Ed, 20 years of experience in educational administration.<br />
        <strong>Jane Smith:</strong> Vice Principal, M.Sc. in Physics, 15 years of teaching experience.<br />
        <strong>Emily Johnson:</strong> English Teacher, M.A. in English, 10 years of teaching experience.<br />
        <strong>Michael Brown:</strong> Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.<br />
        <strong>Sophia Davis:</strong> Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.<br />
        <strong>David Wilson:</strong> Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.
      </p>
    </Container>
  );
}

export default Faculty;
