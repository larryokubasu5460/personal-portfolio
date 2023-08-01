import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming is custom
            breakpoint: { max: 4000, min:3000},
            items: 5
        },
        desktop : {
            breakpoint : {max:3000, min:1023},
            items: 3
        },
        tablet : {
            breakpoint: {max:1024, min:464},
            items: 2
        },
        mobile : {
            breakpoint : {max:464, min:0},
            items:1
        }
    };


    return (
        <section className='skill' id="slills">
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills 
                        </h2>
                        <p>Highly proficient across multiple platforms, languages, and frameworks, I possess a wealth of experience in utilizing cutting-edge development tools and procedures. Whether working independently on projects or collaborating seamlessly within a productive team, I demonstrate effective self-management and an unwavering commitment to success.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={meter1} alt="Rest APIs" />
                                <h5>RESTful APIs</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="attachment" />
                                <h5>PHP Slim</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt="Spring boot" />
                                <h5>Java SpringBoot</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt="attachment" />
                                <h5>Git/Bitbucket</h5>
                            </div>
                  
                            <div className='item'>
                                <img src={meter2} alt="JPA" />
                                <h5>JPA/Hibernate</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="SQL" />
                                <h5>SQL/MYSQL</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="Eloquent" />
                                <h5>Eloquent</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="React" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="C#" />
                                <h5>C# ASP.NET</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="Documentation" />
                                <h5>Documentation</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="Project Management" />
                                <h5>Project Management</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt='attachment'/>
        </section>
    )
}