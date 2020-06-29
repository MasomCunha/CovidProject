import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const CovidList = ({ request, data, input, list, sortType }) => {


    if (sortType === "Largest") {
        data ? data.sort((a, b) => (a.cases < b.cases) ? 1 : -1) : console.log("no data")
    }
    if (sortType === "Smallest") {
        data ? data.sort((a, b) => (a.cases > b.cases) ? 1 : -1) : console.log("no data")
    }



    const FilterCovidInfo = () => {

        if (request === "cases" || request === null) {
            return (
                <div>
                    {data ? (data.map((element) => {
                        return (
                            <Link to = {`/country/${element.country}`}>
                            <Row>
                                <Col>
                                    <p style={{ color: "black", background: "yellow", textAlign: "center" }}> {element.cases} </p>
                                </Col>         
                                <Col>
                                    <p style={{ textAlign: "center" }} key={element.country}><img src={element.countryInfo.flag} width="50" alt={element.country} /></p>
                                </Col>
                                <Col>
                                    <p style={{ color: "black"}} >{element.country}</p>
                                </Col>
                            </Row>
                            </Link>
                        )
                    })) : (console.log("can´t find any data"))}
                </div>
            )
        }


        if (request === "deaths") {
            return (
                <div>
                    {data ? (data.map((element) => {
                        return (
                            <Link to = {`/country/${element.country}`}>
                            <Row>
                                <Col>
                                    <p style={{ color: "black", background: "red", textAlign: "center" }}> {element.deaths} </p>
                                </Col>
                                <Col>
                                    <p style={{ textAlign: "center" }} key={element.country}><img src={element.countryInfo.flag} width="50" alt={element.country} /></p>
                                </Col>
                                <Col>
                                    <p style={{ color: "black"}}>{element.country}</p>
                                </Col>
                            </Row>
                            </Link>
                        )
                    })) : (console.log("can´t find any data"))}
                </div>
            )
        }

        if (request === "recovered") {
            return (
                <div>
                    {data ? (data.map((element) => {
                        return (
                            <Link to = {`/country/${element.country}`}>
                            <Row>
                                <Col>
                                    <p style={{ color: "black", background: "green", textAlign: "center" }}> {element.recovered} </p>
                                </Col>
                                <Col>
                                    <p style={{ textAlign: "center" }} key={element.country}><img src={element.countryInfo.flag} width="50" alt={element.country} /></p>
                                </Col>
                                <Col>
                                    <p style={{ color: "black"}}>{element.country}</p>
                                </Col>
                            </Row>
                            </Link>
                        )
                    })) : (console.log("can´t find any data"))}
                </div>
            )
        }
    }

    const SingleCountry = () => {

        if (request === "cases" || request === null) {

            return (
                <div>
                    {data.map((element) => {
                        if (element.country === input) {

                            return (
                                <Link to = {`/country/${element.country}`}>
                                <Row>
                                    <Col>
                                        <p style={{ color: "black", background: "yellow", textAlign: "center" }}> {element.cases} </p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: "center" }} key={element.country}><img src={element.countryInfo.flag} width="50" alt={element.country} />
                                        </p>
                                    </Col>
                                    <Col>
                                        <p style={{ color: "black"}}>{element.country}</p>
                                    </Col>
                                </Row>
                                </Link>
                            )
                        }

                        return true;
                    })
                    }
                </div>
            )
        }

        if (request === "deaths") {
            return (
                <div>
                    {data.map((element) => {
                        if (element.country === input) {

                            return (
                                <Link to = {`/country/${element.country}`}>
                                <Row>
                                    <Col>
                                        <p style={{ color: "black", background: "red", textAlign: "center" }}> {element.deaths} </p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: "center" }} key={element.country}><img src={element.countryInfo.flag} width="50" alt={element.country} /></p>
                                    </Col>
                                    <Col>
                                        <p style={{ color: "black"}}>{element.country}</p>
                                    </Col>
                                </Row>
                                </Link>
                            )
                        }
                        return true
                    })}
                </div>
            )
        }

        if (request === "recovered") {
            return (
                <div>
                    {data.map((element) => {
                        if (element.country === input) {

                            return (
                                <Link to = {`/country/${element.country}`}>
                                <Row>
                                    <Col>
                                        <p style={{ color:"black", background: "green", textAlign: "center" }}> {element.recovered} </p>
                                    </Col>
                                    <Col>
                                        <p style={{ color: "black", textAlign: "center" }} key={element.country}><img src={element.countryInfo.flag} width="50" alt={element.country} /></p>
                                    </Col>
                                </Row>
                                </Link>
                            )
                        }
                        return true
                    })}
                </div>
            )
        }


    }



    return (
        <Container style={{  height:'550px', overflowY: 'scroll', background: "#f5f5f0" }}>
            {list === true ? (FilterCovidInfo()) : (SingleCountry())}
        </Container>

    )

}

export default CovidList




