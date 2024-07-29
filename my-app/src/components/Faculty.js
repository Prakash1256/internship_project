import React from 'react';
import { Container } from 'react-bootstrap';

function Faculty() {
  return (
    <Container>
      <h1>Faculty</h1>
      <img 
      style={{
        width:"100%",
        height:"400px"
      }}
      src='https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
      <p>At MadRocket, we are fortunate to have a dedicated team of highly qualified and experienced professionals committed to delivering excellence in education.

Teaching Staff

Our teaching staff comprises educators with diverse backgrounds and expertise in their respective fields. Each teacher holds relevant degrees and certifications, ensuring a deep understanding of their subject matter. Many of our teachers have advanced degrees and specialized training in areas such as curriculum development, educational technology, and special education. Our faculty members are passionate about fostering a stimulating learning environment and employ innovative teaching methods to engage and inspire students.

Administrative Staff

Our administrative team plays a crucial role in the smooth operation of the school. They bring a wealth of experience in educational administration, finance, and human resources. Our administrative professionals are well-versed in managing school operations, supporting staff, and maintaining effective communication with parents and the community. They hold relevant qualifications and have a proven track record of excellence in their respective roles.

Together, our teaching and administrative staff work collaboratively to support the educational mission of our school, ensuring that every student receives the best possible learning experience.</p>
    </Container>
  );
}

export default Faculty;
