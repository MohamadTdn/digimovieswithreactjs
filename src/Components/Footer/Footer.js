import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
          <Col>
            <ul className='Socials text-center'>
              <h5>شبکه های اجتماعی</h5>
              <li>
                <InstagramIcon/>
              </li>
              <li>
                <TelegramIcon/>
              </li>
              <li>
                <YouTubeIcon/>
              </li>
              <li>
                <WhatsAppIcon/>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className='Copyright'>
            <h5 className='text-center'>Create by : Mohamad Tadayon , UI by digimedia template from rtl website</h5>
          </div>
        </Row>
    </Container>
  )
}
