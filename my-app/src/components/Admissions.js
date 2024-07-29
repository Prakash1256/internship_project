import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Admissions() {
  return (
    <Container>
      <h1>Admissions</h1>
      <h2>Admission Process:</h2>
      <p>
        <strong>Process:</strong> "Admission forms are available for download. Submit the completed form along with required documents at the school office."
      </p>
      <p>
        <strong>Criteria:</strong> "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades."
      </p>
      <p>
        <strong>Important Dates:</strong>
        <ul>
          <li><strong>Admission Form Availability:</strong> March 1st</li>
          <li><strong>Last Date for Submission:</strong> March 31st</li>
          <li><strong>Entrance Test:</strong> April 15th</li>
          <li><strong>Announcement of Results:</strong> April 30th</li>
        </ul>
      </p>
      <Button variant="primary" href="/admission-form.pdf" download>
        Download Admission Form
      </Button>
     
    </Container>
  );
}

export default Admissions;
