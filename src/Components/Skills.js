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
                        <p>Culpa qui fugiat excepteur aute ut amet.Excepteur ad dolor aliquip consectetur. Duis aliqua consectetur consectetur esse nisi. Et quis sint aliquip ad ullamco ipsum eu nostrud cillum excepteur id. Do incididunt elit enim sunt laboris. Est pariatur anim fugiat reprehenderit proident do velit consequat ullamco occaecat laboris. Fugiat in dolore exercitation cupidatat et commodo pariatur elit do ex fugiat consectetur ad ad. Ipsum culpa esse ad aute anim non non commodo.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={meter1} alt="" />
                                <h5>UI Development</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="" />
                                <h5>API Development</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt="" />
                                <h5>Database Development</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="" />
                                <h5>Documentation </h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt="" />
                                <h5>Web Design</h5>
                            </div>
                
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp}/>
        </section>
    )
}