import React from 'react'
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { TiHome ,} from "react-icons/ti";
import SlideshowIcon from '@mui/icons-material/Slideshow';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import InfoIcon from '@mui/icons-material/Info';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SearchIcon from '@mui/icons-material/Search';
import './NavMenu.css'

export default function NavMenu() {
  return (
    <Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg" className="Navbar bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="/">
          <img src="/assets/logo.png" className='w-25' alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
            <NavLink to='/'>
              <TiHome /> خانه 
            </NavLink>
            <NavLink to='/movies'>
              <SlideshowIcon/> فیلم ها
            </NavLink>
            <NavLink to='/series'>
               <LiveTvIcon/> سریال ها
            </NavLink>
            <NavLink to='/about'>
             <InfoIcon/> درباره ما
            </NavLink>
            <NavLink to='/contact'>
              <AlternateEmailIcon/> تماس
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="جست و جو"
              className="me-2 search-form"
              aria-label="Search"
              style={{borderRadius: '20px'}}
            />
            <Button size="sm" variant="warning" style={{borderRadius: '50px'}}>
              <SearchIcon style={{color: '#000'}}/>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
