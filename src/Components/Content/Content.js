import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Content() {
  return (
    <Container>
       <Row style={{color: 'white'}}>
        <Col lg={9}>1 of 2</Col>
        <Col lg={3}>2 of 2</Col>
      </Row>
    </Container>
  )
}
