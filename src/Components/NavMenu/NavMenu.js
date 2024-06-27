import React from 'react'
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { TiHome ,} from "react-icons/ti";
import SlideshowIcon from '@mui/icons-material/Slideshow';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import InfoIcon from '@mui/icons-material/Info';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import './NavMenu.css'

export default function NavMenu() {
  return (
    <Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg" className="Navbar bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src="assets/logo.png" className='w-50' alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
            <NavLink to='/'>
              <Nav.Link><TiHome /> خانه </Nav.Link>
            </NavLink>
            <NavLink to='/movies'>
              <Nav.Link> <SlideshowIcon/> فیلم ها</Nav.Link>
            </NavLink>
            <NavLink to='/series'>
              <Nav.Link> <LiveTvIcon/> سریال ها</Nav.Link>
            </NavLink>
            <NavLink to='/about'>
              <Nav.Link> <InfoIcon/> درباره ما</Nav.Link>
            </NavLink>
            <NavLink to='/contact'>
              <Nav.Link> <AlternateEmailIcon/> تماس</Nav.Link>
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
