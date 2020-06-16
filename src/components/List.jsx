import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const CovidList = ({ info, data }) => {

    return (
        <Container>
            <Row>
                <Col>
                {info ? (info.map(element =>
                <p> {element} </p>)) : console.log("choose option")} 
                </Col>
                 <Col> {data ? (data.map(element =>
                <p key={element.countryInfo._id}><img src={element.countryInfo.flag} width="20" alt={element.country} />
                </p>)) : "loading..."} </Col>
            </Row>
        </Container>

    )

}

export default CovidList