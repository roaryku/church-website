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
  Link,
  Navigate
} from "react-router-dom";
import Home from './home/Home';
import OurMenu from './ourMenu/OurMenu';
import Gallery from './gallery/gallery';
import About from './about/About';

import { useTranslation } from 'react-i18next';
import Contact from './contact/Contact';

function Menu({toggleLang}) {

    const { i18n, t } = useTranslation()


  return (  <Router>
    <div className='menuHeader'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
            <img src={logo} className='businessLogo' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="mx-auto d-flex my-3 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='link' as={Link} to={"/" }>{t ('Home')}</Nav.Link>
            <Nav.Link className='link' as={Link} to={"/ourMenu" }>{t ('OurMenu')}</Nav.Link>
            <Nav.Link className='link' as={Link} to={"/gallery" }>{t ('Gallery')}</Nav.Link>
            <Nav.Link className='link' as={Link} to={"/about" }>{t ('About')}</Nav.Link>
            <Nav.Link className='link' as={Link} to={"/contact" }>{t ('Contact')}</Nav.Link>
          </Nav>
         
          <Button variant="outline-dark" className='navBtn' onClick={toggleLang}>
            {i18n.language === 'en'  ? 'Українська' : 'English'}
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ourMenu" element={<OurMenu/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
             <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </div>
    </div>
    </Router> 
     

  );
}

export default Menu;