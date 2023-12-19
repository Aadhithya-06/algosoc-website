import React from 'react'
import './style.css'
import Title from "../../components/title";
import CompanyProfile from "../../components/company-profile";
import {Container, Row, Col} from "react-bootstrap";

function Sponsors() {

    const baseUrl = process.env.PUBLIC_URL + '/img/sponsors/';

    return (
        <section id={'sponsors'}>
            <Title name={'SPONSORS'} />
            <Container className={'sponsors-container'}>
                <Row md={2} xs={1}>
                    <Col>
                        <CompanyProfile src={baseUrl + 'citadel.png'} name={'Citadel'}/>
                    </Col>
                    <Col>
                        <CompanyProfile src={baseUrl + 'hrt.png'} name={'Hudson River Trading'}/>
                    </Col>
                    <Col>
                        <CompanyProfile src={baseUrl + 'flow-trader.png'} name={'Flow Trader'}/>
                    </Col>
                    <Col>
                        <CompanyProfile src={baseUrl + 'world-quant.png'} name={'WorldQuant'}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Sponsors
