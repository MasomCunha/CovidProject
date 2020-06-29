import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import CountryInfoApi from '../api/CountryInfoApi.jsx';
import Flag from '../componentsSingleCountry/Flag.jsx'
import GrafsCountry from '../componentsSingleCountry/GrafsCountry.jsx'
import CountryInformation from '../componentsSingleCountry/CountryInformation.jsx';
import "./SingleCountry.css";

class SingleCountry extends Component {

    state = {
        country: this.props.match.params.country,
        countryInfo: null,
        countryCases: null,

    }

    addCountryInfo = (data) => {
        this.setState({ countryInfo: data })
    }

    addCountryCases = (data) => {
        this.setState({ countryCases: data })
    }



    render() {
        return (
            <div>
                <br />
                <Container>
                    <CountryInfoApi
                        country={this.state.country}
                        addCountryCases={this.addCountryCases}
                        addCountryInfo={this.addCountryInfo}
                    />
                    <Row xs="2">
                        <Col className="FlagAndName">
                            <Flag
                                countryInfo={this.state.countryInfo}
                            />
                        </Col>
                        <Col className="Information">
                            <CountryInformation
                                countryInfo={this.state.countryInfo}
                                countryCases={this.state.countryCases}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row xs="1">
                        <Col className="Map">
                            <GrafsCountry
                                countryCases={this.state.countryCases}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default SingleCountry;