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
                    <h1>{ date() }</h1>
                    <p>Cases: {countryInfo.data.todayCases}</p>
                    <p>Deaths: {countryInfo.data.todayDeaths}</p>
                    <p>Recovered: {countryInfo.data.todayRecovered}</p>
                    <p>Tests: {countryInfo.data.tests }</p>
                </Fragment>
            )
        }
    }

    const perMillion = () => {
        if (countryInfo) {
            return (
                <Fragment>
                    <h1>Per 1 Million</h1>
                    <p>Cases per 1 Million: { countryInfo.data.casesPerOneMillion }</p>
                    <p>Deaths per 1 Million: { countryInfo.data.deathsPerOneMillion }</p>
                    <p>Recovered per 1 Million: { countryInfo.data.recoveredPerOneMillion }</p>
                    <p>Tests per 1 Million: { countryInfo.data.testsPerOneMillion }</p>
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
                <Col>
                    { perMillion() }
                </Col>
            </Row>
        </Container>
    )

}

export default CountryInformation