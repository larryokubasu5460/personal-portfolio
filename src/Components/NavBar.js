import React from 'react';
import {useState, useEffect } from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

   const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const handleMailToClick = () => {
      const email = 'larryokubasu3@gmail.com';
      window.location.href = `mailto:${email}`;
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : "" }>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className='social-icon'>
                    <a href="https://www.linkedin.com/in/larry-okubasu-84520b198/"><img src={navIcon1} alt='LinkedIn' /></a>
                    <a href="https://twitter.com/larry_okubasu"><img src={navIcon2} alt='Twitter' /></a>
                    <a href="https://www.instagram.com/la_rr.y/"><img src={navIcon3} alt='Instagram' /></a>
                </div>
                <button className='vvd' onClick={handleMailToClick}><span>Let's Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

