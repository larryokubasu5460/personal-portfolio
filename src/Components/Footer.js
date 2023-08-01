import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
    

    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/larry-okubasu-84520b198/"><img src={navIcon1} alt="linkedIn"/></a>
                            <a href="https://twitter.com/larry_okubasu"><img src={navIcon2} alt="twitter" /></a>
                            <a href="https://www.instagram.com/la_rr.y/"><img src={navIcon3} alt="instagram" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}