import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const CovidList = ({ request, data, country }) => {

    const flag = () => {
        return(
        <Col> {data ? (data.map(element =>
            <p style={{ textAlign: "center"}} key={element.country}><img src={element.countryInfo.flag} width="20" alt={element.country} />
            </p>)) : "loading..."}
        </Col>
        )
    }

    const filterCovidInfo = () => {
        
        if (request === "cases" || request === null) {
            return (
                <Row>
                    <Col>
                        {data ? data.map(element =>
                            <p style={{ background : "yellow", textAlign: "center"}}> { element.cases} </p>) : console.log("nada")}
                    </Col>
                   {flag()}
                </Row>
            )
        }

        if (request === "deaths") {
            return (
                <Row>
                    <Col>
                        { data ? data.map(element =>
                            <p style={{ background : "red", textAlign: "center" }}> { element.deaths } </p>): console.log("nada")}
                    </Col>
                    {flag()}
                </Row>
            )
        }

        if (request === "recovered") {
            return (
                <Row>
                    <Col>
                        {data ? data.map(element =>
                            <p style={{ background : "green", textAlign: "center" }}> { element.recovered} </p>) : console.log("nada") }
                    </Col>
                    {flag()}
                </Row>
            )
        }
    }

    return (
        <Container style={{ background : "#f5f5f0" }}>
            {filterCovidInfo()}
        </Container>

    )

}

export default CovidList




