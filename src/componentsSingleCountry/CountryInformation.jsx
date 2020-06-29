import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

const CountryInformation = ({ countryInfo }) => {

    const date = () => {
        const now = new Date()
    
        return (now.getDate() + "/" + (now.getMonth() + 1 ) + "/" + now.getFullYear())
        
      }


    const dairyCases = () => {
        if (countryInfo) {
            console.log(countryInfo.data)
            return (
                <Fragment>
                    <h1 style = {{ color: "#1b2d24"}}> { date() }</h1>
                    <p style = {{ color: "yellow"}}>Cases: {countryInfo.data.todayCases}</p>
                    <p style = {{ color: "red"}}>Deaths: {countryInfo.data.todayDeaths}</p>
                    <p style = {{ color: "green"}}>Recovered: {countryInfo.data.todayRecovered}</p>
                    <p style = {{ color: "blue"}}>Tests: {countryInfo.data.tests }</p>
                </Fragment>
            )
        }
    }

    const perMillion = () => {
        if (countryInfo) {
            return (
                <Fragment>
                    <h1 style = {{ color: "#1b2d24"}}>Per 1 Million</h1>
                    <p style = {{ color: "yellow"}}>Cases per 1 Million: { countryInfo.data.casesPerOneMillion }</p>
                    <p style = {{ color: "red"}}>Deaths per 1 Million: { countryInfo.data.deathsPerOneMillion }</p>
                    <p style = {{ color: "green"}}>Recovered per 1 Million: { countryInfo.data.recoveredPerOneMillion }</p>
                    <p style = {{ color: "blue"}}>Tests per 1 Million: { countryInfo.data.testsPerOneMillion }</p>
                </Fragment>
            )
        }
    }



    return (
        <Container>
            <Row>
                <Col>
                    { dairyCases() }
                </Col>
                <Col >
                    { perMillion() }
                </Col>
            </Row>
        </Container>
    )

}

export default CountryInformation