import React from 'react'
import './style.css'
import {Container, Row, Col} from "react-bootstrap";
import Title from "../../components/title";

function Events({ page }) {

    return (
        <div>
            <img className={'events-wave'} src={process.env.PUBLIC_URL + '/img/wave-02.svg'} alt={'wave-header'}/>
            <div id={'events'}>
                <Title name={'EVENTS'} white={'true'}/>
                <Container className={'events-container'}>
                    {page === 'womenInTrading' ? (
                        <div className={'women-in-trading-events'}>
                            <h3>Our Flagship Events</h3>
                            <p>
                                We recognise that diversity in trading fosters creativity and problem- solving, and aim to engage our members through highly interactive sessions. Here's what we aim to provide:
                            </p>
                            <ul>
                                <li>
                                    <b>Recurring Trade Idea Sessions:</b> Bi-monthly sessions where small groups of female participants pitch short trade ideas across various asset classes, addressing risks, catalysts, entry point, target, and stop loss values. This will be followed by feedback from an alumni panel and a broader discussion on market trends. This event aims to boost confidence and commercial awareness, addressing imposter syndrome STEM females commonly experience during trading internships.
                                </li>
                                <li>
                                    <b>Company-Specific Sessions:</b> Hosted by companies, these provide insights into different trading firms; and may come in the form of:
                                    <ul>
                                        <li><b>Q&A Panels:</b> Seasoned traders share their insights and expertise.</li>
                                        <li><b>Networking Opportunities:</b> Connect with like-minded individuals and industry experts.</li>
                                    </ul>
                                </li>
                            </ul>
                            <h3>What we also aim to offer</h3>
                            <ul>
                                <li>
                                    <b>Electronic Simulation Platform:</b> We are looking to host an interactive simulation platform that offers a hands-on trading experience. Members can input and track their trade ideas in real time, with no real financial risk involved, while adhering to predetermined risk limits.
                                </li>
                                <li>
                                    <b>Algorithmic Coding Workshops:</b> Our workshops will aim provide instruction on financial fundamentals, gradually progressing to more advanced macroeconomic and technical concepts. The macroeconomic aspect will cover the fundamentals of various asset classes and products. 
                                </li>
                                <li>   
                                    <b>Dedicated Application Assistance:</b> We intend to establish a mentorship program to guide and assist our members once we have a more established membership base.
                                </li>
                                <li>    
                                    <b>Inter-University Socials:</b> Our goal is to extend our network beyond Imperial College and promote collaboration by organising social events with other universities.
                                </li>
                            </ul>
                        </div>
                    ) : (
                        // Regular Events Content
                        <Row md={2} xs={1}>
                            <Col className={'events-image-container'}>
                                <img className={'events-image'} src={process.env.PUBLIC_URL + '/img/events-image.png'}
                                     alt={'events'}/>
                            </Col>
                            <Col className={'events-info'}>
                                <div>
                                    <h4 className={'events-title'}>
                                        ALGOTHON 2023
                                    </h4>
                                </div>
                                <p className={'events-date'}>
                                    4-5 November 2023
                                </p>
                                <p className={'event-info'}>
                                    We are thrilled to have successfully hosted Algothon, Europe's largest quant hackathon. This event, held for the first time since 2019, witnessed an impressive array of quantitative challenges presented by various companies. Teams, consisting of up to three members, showcased their skills and creativeness in tackling these complex challenges. Stay tuned for more events this year!
                                </p>
                                <br/>
                            </Col>
                        </Row>
                    )}
                </Container>
            </div>
        </div>
    )

}

export default Events
