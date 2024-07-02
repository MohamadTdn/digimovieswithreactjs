import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer/Footer'
import './Contact.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Contact() {
  return (
    <div style={{color: '#ffff'}}>
      <NavMenu/>
      <Container>
        <Row>
          <Col lg={9} style={{padding: '90px 0 0 0'}}>
            <h4>تماس با ما</h4>
            <ul>
              <li>
                <InstagramIcon/>
                اینستاگرام
              </li>
              <li>
                <TelegramIcon/>
                تلگرام
              </li>
            </ul>
          </Col>
          <Col lg={3} style={{padding: '90px 0 0 0'}}>
            <Sidebar/>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}
