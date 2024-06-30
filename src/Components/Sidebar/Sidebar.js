import React from 'react'
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='Sidebar'>
      <Stack direction="row" spacing={2}>
        <Button color='secondary' style={{margin: '0 10px', fontSize: '20px'}} variant="contained" startIcon={<InstagramIcon />}>
          اینستاگرام
        </Button>
        <Button style={{padding: '10px', fontSize: '20px'}} variant="contained" startIcon={<TelegramIcon />}>
          تلگرام
        </Button>
      </Stack>
      <div className='New'>
        <div style={{padding: '20px',display: 'flex', justifyContent: 'space-between'}}>
          <h5>جدیدترین ها</h5>
          <Button variant="contained" color='success'>همه</Button>
        </div>
        <ul>
          <li>
             <img src="assets/post.jfif" className='Sidebar-img' alt="" />
          </li>
          <li>
             <img src="assets/post.jfif" className='Sidebar-img' alt="" />
          </li>
          <li>
             <img src="assets/post.jfif" className='Sidebar-img' alt="" />
          </li>
        </ul>
      </div>  
      <div className='Best-Movies'>
        <div style={{padding: '20px',display: 'flex', justifyContent: 'space-between'}}>
            <h5>250 فیلم IMDB</h5>
            <Button variant="contained" color='success'>همه</Button>
        </div>
          <ul>
            <li style={{padding: '20px 0'}}>
              <div style={{display: 'flex',}}>
                <div>
                  <img className='Best-Movies-img' src="assets/post.jfif" alt="" />
                </div>
                <div style={{margin: '0 20px 0 0'}}>
                  <h4 style={{fontSize: '20px'}}>Inception</h4>
                  <h5 style={{fontSize: '15px', margin: '20px 0 0 0'}}>علمی تخیلی</h5>
                </div>
              </div>
            </li>
            <li style={{padding: '20px 0'}}>
              <div style={{display: 'flex',}}>
                <div>
                  <img className='Best-Movies-img' src="assets/post.jfif" alt="" />
                </div>
                <div style={{margin: '0 20px 0 0'}}>
                  <h4 style={{fontSize: '20px'}}>Inception</h4>
                  <h5 style={{fontSize: '15px', margin: '20px 0 0 0'}}>علمی تخیلی</h5>
                </div>
              </div>
            </li>
            <li style={{padding: '20px 0'}}>
              <div style={{display: 'flex',}}>
                <div>
                  <img className='Best-Movies-img' src="assets/post.jfif" alt="" />
                </div>
                <div style={{margin: '0 20px 0 0'}}>
                  <h4 style={{fontSize: '20px'}}>Inception</h4>
                  <h5 style={{fontSize: '15px', margin: '20px 0 0 0'}}>علمی تخیلی</h5>
                </div>
              </div>
            </li>
          </ul>
      </div>

      <div className='Best-Series'>
        <div style={{padding: '20px',display: 'flex', justifyContent: 'space-between'}}>
            <h5>250 سریال IMDB</h5>
            <Button variant="contained" color='success'>همه</Button>
        </div>
          <ul>
            <li style={{padding: '20px 0'}}>
              <div style={{display: 'flex',}}>
                <div>
                  <img className='Best-Movies-img' src="assets/post.jfif" alt="" />
                </div>
                <div style={{margin: '0 20px 0 0'}}>
                  <h4 style={{fontSize: '20px'}}>Inception</h4>
                  <h5 style={{fontSize: '15px', margin: '20px 0 0 0'}}>علمی تخیلی</h5>
                </div>
              </div>
            </li>
            <li style={{padding: '20px 0'}}>
              <div style={{display: 'flex',}}>
                <div>
                  <img className='Best-Movies-img' src="assets/post.jfif" alt="" />
                </div>
                <div style={{margin: '0 20px 0 0'}}>
                  <h4 style={{fontSize: '20px'}}>Inception</h4>
                  <h5 style={{fontSize: '15px', margin: '20px 0 0 0'}}>علمی تخیلی</h5>
                </div>
              </div>
            </li>
            <li style={{padding: '20px 0'}}>
              <div style={{display: 'flex',}}>
                <div>
                  <img className='Best-Series-img' src="assets/post.jfif" alt="" />
                </div>
                <div style={{margin: '0 20px 0 0'}}>
                  <h4 style={{fontSize: '20px'}}>Inception</h4>
                  <h5 style={{fontSize: '15px', margin: '20px 0 0 0'}}>علمی تخیلی</h5>
                </div>
              </div>
            </li>
          </ul>
      </div>
      <div className='Movies-pics' >
        <Container>
        <Row>
          <Col sm={8}>
             <img src="assets/post.jfif" className='Random-img' alt="" />
          </Col>
          <Col sm={4}>
            <img src="assets/post.jfif" className='Random-img' alt="" />
          </Col>
        </Row>
        <Row>
          <Col sm>
             <img src="assets/post.jfif" className='Random-img' alt="" />
          </Col>
          <Col sm>
             <img src="assets/post.jfif" className='Random-img' alt="" />
          </Col>
          <Col sm>
             <img src="assets/post.jfif" className='Random-img' alt="" />
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  )
}
