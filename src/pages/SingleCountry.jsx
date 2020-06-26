import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import CountryInfoApi from '../api/CountryInfoApi.jsx';
import Flag from '../componentsSingleCountry/Flag.jsx'
import GrafsCountry from '../componentsSingleCountry/GrafsCountry.jsx'
import CountryInformation from '../componentsSingleCountry/CountryInformation.jsx';

class SingleCountry extends Component {

    state = {
        country : this.props.match.params.country,
        countryInfo: null,
        countryCases : null,
        
    }

    addCountryInfo = (data) => {
        this.setState({ countryInfo: data })
    }

    addCountryCases = (data) => {
        this.setState({ countryCases: data })
    }

    

    render(){
        return(
            <Container>
            <CountryInfoApi 
                country = { this.state.country } 
                addCountryCases = { this.addCountryCases }
                addCountryInfo = { this.addCountryInfo }
            />
            <Row xs="2">
              <Col>
                  <Flag
                    countryInfo = { this.state.countryInfo }
                  />
              </Col>
              <Col>
                  <CountryInformation 
                    countryInfo = { this.state.countryInfo }
                    countryCases = { this.state.countryCases }
                  />
              </Col>
              </Row>
              <Row xs = "1">
              <Col>
                  <GrafsCountry
                      countryCases = { this.state.countryCases }
                  />
              </Col>
              </Row>
            </Container>
        )
    }

}

export default SingleCountry;