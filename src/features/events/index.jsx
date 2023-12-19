import React from 'react'
import './style.css'
import {Container, Row, Col} from "react-bootstrap";
import Title from "../../components/title";
import Button from "../../components/button";

function Events() {

    return (
        <div>
            <img className={'events-wave'} src={process.env.PUBLIC_URL + '/img/wave-02.svg'} alt={'wave-header'}/>
            <div id={'events'}>
                <Title name={'EVENTS'} white={'true'}/>
                <Container className={'events-container'}>
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
                </Container>
            </div>
        </div>
    )

}

export default Events
