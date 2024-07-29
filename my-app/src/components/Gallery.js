import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const galleryItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1596496356933-9b6e0b186b88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', type: 'event', date: '2024-01-15' },
  { id: 2, src: 'https://plus.unsplash.com/premium_photo-1663040565753-b9661aa51905?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', type: 'activity', date: '2024-03-20' },
  { id: 3, src: 'https://images.unsplash.com/photo-1664382953647-5c6c76dd63b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', type: 'event', date: '2024-05-10' },
  { id: 4, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', type: 'activity', date: '2024-07-25' },
  {id:5, src:'https://plus.unsplash.com/premium_photo-1677171749355-4ad563d86165?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,type: 'activity', date: '2024-07-25'},
  {id:6, src:'https://images.unsplash.com/photo-1507537509458-b8312d35a233?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,type: 'activity', date: '2024-07-25'}
];

function Gallery() {
  const [filterType, setFilterType] = useState('all');
  const [filterDate, setFilterDate] = useState('');

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleFilterDateChange = (event) => {
    setFilterDate(event.target.value);
  };

  const filteredItems = galleryItems.filter(item => {
    const isTypeMatch = filterType === 'all' || item.type === filterType;
    const isDateMatch = !filterDate || item.date === filterDate;
    return isTypeMatch && isDateMatch;
  });

  return (
    <Container>
      <h1 className="text-center">Gallery</h1>
      <p className="text-center">Photo and video gallery showcasing school events and activities.</p>
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Group controlId="filterType">
              <Form.Label>Filter by Type</Form.Label>
              <Form.Control as="select" value={filterType} onChange={handleFilterTypeChange}>
                <option value="all">All</option>
                <option value="event">Event</option>
                <option value="activity">Activity</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="filterDate">
              <Form.Label>Filter by Date</Form.Label>
              <Form.Control type="date" value={filterDate} onChange={handleFilterDateChange} />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row className="gallery-row">
        {filteredItems.map(item => (
          <Col md={4} sm={6} className="mb-4" key={item.id}>
            <img src={item.src} alt='Gallery Image' className="img-fluid" />
          </Col>
        ))}
        <Col md={12} className="mb-4">
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TpdoYhT43rU?si=V4m_qMSRJBcOfkYZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
