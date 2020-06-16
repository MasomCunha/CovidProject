import React, { Component } from 'react'
import CovidApi from './api/CovidApi.jsx'
import { Container, Row, Col } from 'reactstrap';
import InputCountry from './components/InputCountry.jsx';
import NavOptions from './components/Navbar.jsx';
import CovidList from './components/List.jsx';


class CovidApp extends Component {

    state = {
        data : null,
        request : null,
    }

    addData = (res) =>{
        this.setState({ data : res.data })
    }

    changeRequest = (request) => {
        this.setState({
            request : request
        })
    }

    filterCovidInfo = () => {

        
        if(this.state.request === "cases") {
            return this.state.data.map(element => element.cases)
          }
      
          if(this.state.request === "deaths") {
            return this.state.data.map(element => element.deaths)
          }
           
          if(this.state.request === "recovered") {
            return this.state.data.map(element => element.recovered)
          }
    }

    render() {
        return (
            <div>
                <h1>Covid App</h1>
                <br/>
                <Container>
                    <Row xs="2">
                        <Col>
                            <InputCountry />
                            <br/>
                            <NavOptions changeRequest = { this.changeRequest }/>
                            <CovidApi addData = { this.addData }/>
                            <CovidList 
                                info = { this.filterCovidInfo() }
                                data = { this.state.data }    
                                />
                        </Col>
                        <Col><h1>mapa</h1></Col>
                        <Col></Col>
                        <Col><h1>graficos</h1></Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default CovidApp