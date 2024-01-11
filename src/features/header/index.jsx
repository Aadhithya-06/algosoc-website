import React from 'react'
import Navbar from '../../components/navbar'
import NavbarWiT from '../../components/navbar-wit'
import Button from "../../components/button";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './style.css'


function Header({ page }) {

    const algosocUrl = 'https://www.imperialcollegeunion.org/activities/a-to-z/algorithmic-trading';

    if (page === 'womenInTrading') {
        return (
            <div>
                <div className={'header'}>
                    <NavbarWiT />
                    <Container className={'society-intro'}>
                        <Row md={2} xs={1}>
                            <Col className={'society-title-container'}>
                                <div className={'title-separator-container'}>
                                    <hr className={'title-separator'}/>
                                </div>
                                <p className="society-description">
                                    Imperial College's Algorithmic Society is dedicated to fostering 
                                    diversity and innovation within the financial industry. We are excited 
                                    to introduce IC Women in Trading (WIT), a new project aimed at 
                                    empowering women in STEM with the essential knowledge, tools, and 
                                    opportunities required to thrive in the world of trading. Our core 
                                    mission is to bridge the gender gap in trading, with a specific focus 
                                    on women in STEM who may be new to this dynamic field.
                                </p>
                            </Col>
                            <Col className={'society-image-container'}>
                                <img className={'header-image'} src={process.env.PUBLIC_URL + '/img/title-image.png'}
                                    alt={'title'}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <img className={'header-wave'} src={process.env.PUBLIC_URL + '/img/wave-01.svg'} alt={'wave-footer'}/>
            </div>
        );
    }

    return (
        <div>
            <div className={'header'}>
                <Navbar />
                <Container className={'society-intro'}>
                    <Row md={2} xs={1}>
                        <Col className={'society-title-container'}>
                            <h1 className={'society-title'}>
                                ALGORITHMIC TRADING SOCIETY
                            </h1>
                            <div className={'title-separator-container'}>
                                <hr className={'title-separator'}/>
                            </div>
                            <Row className="button-row justify-content-md-start" md={2} xs={1}>
                                <Col md="auto" className="button-col">
                                    <Button name={'JOIN US'}
                                            onClick={() => window.location.href = algosocUrl}/>
                                </Col>
                                <Col md="auto" className="button-col">
                                    <Link to="/women-in-trading">
                                        <Button name={'WOMEN IN TRADING'} />
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col className={'society-image-container'}>
                            <img className={'header-image'} src={process.env.PUBLIC_URL + '/img/title-image.png'}
                                 alt={'title'}/>
                        </Col>
                    </Row>

                </Container>
            </div>
            <img className={'header-wave'} src={process.env.PUBLIC_URL + '/img/wave-01.svg'} alt={'wave-footer'}/>
        </div>
    );

}

export default Header
