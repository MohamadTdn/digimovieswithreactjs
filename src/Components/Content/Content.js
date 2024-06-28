import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Posts from '../Posts/Posts';
import Sidebar from '../Sidebar/Sidebar';

export default function Content() {
  return (
    <Container>
       <Row style={{color: 'white'}}>
        <Col lg={9}>
          <Posts/>
          <Posts/>
          <Posts/>
          <Posts/>
          <Posts/>
        </Col>
        <Col lg={3}>
          <Sidebar/>
        </Col>
      </Row>
    </Container>
  )
}
