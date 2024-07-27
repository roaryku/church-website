import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './photos/Preview.png'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './home/Home';
import Live from './Live';
import Ministries from './ministry/Ministries';
import Events from './events/Events';
import About from './about/About';

import { useTranslation } from 'react-i18next';
import Contact from './contact/Contact';
import Staff from './contact/Staff';
import MembersInfoUpdate from './contact/MembersInfoUpdate';

function Menu({toggleLang}) {

    const { i18n, t } = useTranslation()


  return (  <Router>
    <div className='menuHeader'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
            <img src={logo} className='churchLogo' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="mx-auto d-flex my-3 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='link' as={Link} to={"/home" }>{t ('Home')}</Nav.Link>
            <Nav.Link className='link' as={Link} to={"/live" }>{t ('Live')}</Nav.Link>
            <Nav.Link className='link' as={Link} to={"/ministries" }>{t ('Ministries')}</Nav.Link>
            <Nav.Link className='link' as={Link} to={"/events" }>{t ('Events')}</Nav.Link>
            <Nav.Link className='link' as={Link} to={"/about" }>{t ('About')}</Nav.Link>
            <Nav.Link className='link' as={Link} to={"/contact" }>{t ('Contact')}</Nav.Link>
            {/* <NavDropdown title="Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item to={"/contact"} >Contact Church Staff</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/"}>Member Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Information Update</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
         
          <Button variant="outline-dark" className='navBtn' onClick={toggleLang}>
            {i18n.language === 'en' ? 'English' : 'Română'}
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<div>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/live" element={<Live/>}/>
      <Route path="/ministries" element={<Ministries/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

           <Route path='/staff' element={<Staff/>} />
           <Route path='/membersinfoupdate' element={<MembersInfoUpdate/>}/>
           <Route />
    </Routes>
    </div>
    </div>
    </Router> 
     

  );
}

export default Menu;