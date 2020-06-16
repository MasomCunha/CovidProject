import React, { Component } from 'react'
import CovidApi from './api/CovidApi.jsx'
import { Container, Row, Col } from 'reactstrap';
import InputCountry from './components/InputCountry.jsx';
import NavOptions from './components/Navbar.jsx';
import CovidList from './components/List.jsx';
import SingleCountry from './components/SingleCountry.jsx'

class CovidApp extends Component {

    state = {
        data : null,
        request : null,
        countryChosen : '',
        list: true
    }

    addData = (res) =>{
        this.setState({ data : res.data })
    }

    changeRequest = (request) => {
        this.setState({
            request : request
        })
    }

    addCountry = (country) =>{
        this.setState ({
            countryChosen : country
        })
        console.log(this.state.countryChosen)
    }

    changeList = (valor) => {
        this.setState({
            list: valor
        })
        console.log(this.state.list)
    }

    render() {
        return (
            <div>
                <h1>Covid App</h1>
                <br/>
                <Container >
                    <Row xs="2">
                        <Col>
                            <InputCountry 
                                addCountry = { this.addCountry }
                                changeList = { this.changeList }
                            />
                            <br/>
                            <NavOptions
                                changeRequest = { this.changeRequest }
                                changeList = { this.changeList }
                            />
                            <CovidApi addData = { this.addData }/>
                            {this.state.list === true ? 
                            (<CovidList 
                                data = { this.state.data }    
                                request = {this.state.request}
                                />) : (
                            <SingleCountry 
                                data = { this.state.data } 
                                country = {this.state.countryChosen}
                            />
                                )}
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