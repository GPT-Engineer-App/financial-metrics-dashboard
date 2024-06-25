import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Index() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4} sm={12}>
          <Card>
            <Card.Body>
              <Card.Title>Key Metric 1</Card.Title>
              <Card.Text>Placeholder for Key Metric 1</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card>
            <Card.Body>
              <Card.Title>Key Metric 2</Card.Title>
              <Card.Text>Placeholder for Key Metric 2</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card>
            <Card.Body>
              <Card.Title>Key Metric 3</Card.Title>
              <Card.Text>Placeholder for Key Metric 3</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
