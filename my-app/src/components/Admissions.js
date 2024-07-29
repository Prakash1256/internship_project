import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Admissions() {
  return (
    <Container>
      <h1>Admissions</h1>
      <h2>Admission Process:</h2>
      <p>
        <strong>Application Submission:</strong> Prospective students and their parents are invited to submit an application form, available on our website or at the school’s administrative office. The form should be completed with accurate details and submitted along with any required documents.
        <br />
        <strong>Document Verification:</strong> After submission, our admissions team will review the application and verify the provided documents. This may include previous academic records, proof of age, and any additional documentation required for the admission process.
        <br />
        <strong>Entrance Assessment:</strong> Depending on the grade level, applicants may be required to take an entrance assessment. This evaluation helps us understand the student’s academic level and ensure the right fit for our programs.
        <br />
        <strong>Interview:</strong> Shortlisted candidates will be invited for an interview with our admissions committee. This interview provides an opportunity to discuss the student’s interests, aspirations, and alignment with our school’s values and curriculum.
        <br />
        <strong>Admission Decision:</strong> Based on the application, assessment, and interview, the admissions committee will make a decision. Parents will be notified of the outcome and, if accepted, provided with further instructions for enrollment.
        <br />
        <strong>Enrollment:</strong> Accepted students will complete the enrollment process, which includes submitting final documents, paying any applicable fees, and attending an orientation session to familiarize themselves with school procedures and resources.
      </p>
      <Button variant="primary" href="/admission-form.pdf" download>
        Download Admission Form
      </Button>
      <h3>Application Period Opens</h3>
      <p>
        Date: [29-07-2024] <br />
        Description: The application portal opens for new admissions. Prospective students and their families can begin submitting applications and required documents.
      </p>
      <h3>Application Submission Deadline</h3>
      <p>
        Date: [04-07-2024] <br />
        Description: All application forms and supporting documents must be submitted by this date.
      </p>
    </Container>
  );
}

export default Admissions;
