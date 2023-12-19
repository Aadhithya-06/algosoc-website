import React from 'react'
import Navbar from '../../components/navbar'
import Button from "../../components/button";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './style.css'


function Header() {

    return (
        <div>
            <div className={'header'}>
                <Navbar/>
                <Container className={'society-intro'}>
                    <Row md={2} xs={1}>
                        <Col className={'society-title-container'}>
                            <h1 className={'society-title'}>
                                ALGORITHMIC TRADING SOCIETY
                            </h1>
                            <div className={'title-separator-container'}>
                                <hr className={'title-separator'}/>
                            </div>
                            <Row md={2} xs={1}>
                                <div>
                                <h4 className={'society-uni-title'}>
                                    IMPERIAL COLLEGE LONDON
                                </h4>
                                <Button name={'JOIN US'}
                                        onClick={() => window.location.href = 'https://www.imperialcollegeunion.org/activities/a-to-z/algorithmic-trading'}/>
                                </div>
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
