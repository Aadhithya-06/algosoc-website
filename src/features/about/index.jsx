import React from 'react'
import './style.css'
import Title from "../../components/title";
import {Col, Row, Container} from "react-bootstrap";

function About({ page }) {

    const content = page === 'womenInTrading' ? (
        <div>
            <p>
                <b>Empowering the Next Generation:</b> We are committed to creating a close-knit community of female
                Imperial College students, both current students and alumni, fostering an environment where they
                can thrive and learn.
            </p>
            <p>
                <b>Comprehensive Support:</b> Our society is designed to provide comprehensive support to its members.
                We offer weekly sessions covering trading fundamentals, Q&A panels featuring industry experts,
                dedicated application assistance through a mentorship scheme, coding workshops to enhance technical
                skills, networking opportunities, and inter-university socials.
            </p>
            <p>
               <b>Building a Network of Female Traders:</b> The gender imbalance in the trading industry is stark, as
                evidenced by the 12-15% of females across the Wall Street trading floors in 2019. WIT is committed to
                drive positive change by providing an educational platform for women in STEM to explore trading.
            </p>
        </div>
    ) : (
        <p>
            As of March 2018, we became a society for the first time at Imperial College London and have
            since held a launch event where participants were introduced to the society and the activities
            we will be planning for the upcoming academic year. Regardless of whether you are a novice to
            trading or a veteran Quant, all are welcomed to be part of the society. If you want to learn
            more about simple trading strategies or more complicated statistical arbitrage of stocks, the
            society hopes to bring students closer to learning and developing their understanding and
            application of algorithms in a financially driven context.
        </p>
    );

    return (
        <section id={'about-us'}>
            <Title name={page === 'womenInTrading' ? 'OUR VISION' : 'ABOUT US'}/>
            <Container className={'about-container'}>
            <Row md={2} xs={1}>
                {page === 'womenInTrading' ? 
                    <Col md={12} className={'about-content'}>{content}</Col> 
                    :
                    <>
                        <Col md={6} className={'about-content'}>{content}</Col>
                        <Col md={6} className={'logo-container'}>
                            <img className={'logo'} src={process.env.PUBLIC_URL + '/img/logo.png'} alt={'Society Logo'}/>
                        </Col>
                    </>
                }
            </Row>
            </Container>
        </section>
    );
}

export default About
