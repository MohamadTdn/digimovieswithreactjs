import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
  return (
    <Container className='Footer'>
        <Row>
            <Col>
              <ul className='Quick-Access'>
                <h5>صفحات</h5>
                <li>
                  <Link>خانه</Link>
                </li>
                <li>
                  <Link>فیلم ها</Link>
                </li>
                <li>
                  <Link>سریال ها</Link>
                </li>
              </ul>
            </Col>
            <Col>
              <p className='Footer-desc'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم اسراهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </Col>
        </Row>
        <Row>
          <Col>s</Col>
        </Row>
    </Container>
  )
}
