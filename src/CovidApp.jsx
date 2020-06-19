import React, { Component } from 'react'
import CovidApi from './api/CovidApi.jsx'
import { Container, Row, Col } from 'reactstrap';
import InputCountry from './components/InputCountry.jsx';
import NavOptions from './components/Navbar.jsx';
import CovidList from './components/List.jsx';
//import Grafs from './components/Grafs.jsx'

class CovidApp extends Component {

    state = {
        data : null,
        request : null,
        input : '',
        list: true,
        sortType: ''
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
            input : country
        })
    }

    changeList = (valor) => {
        this.setState({
            list: valor
        })
    }

    sortType = (sort) => {
        this.setState({
            sortType: sort
        })
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
                                sortType = { this.sortType }
                            />
                            <CovidApi addData = { this.addData }/>
                            <CovidList 
                                data = { this.state.data }    
                                request = { this.state.request }
                                input = { this.state.input }
                                list = { this.state.list }
                                sortType = { this.state.sortType }
                                />
                        </Col>
                        <Col id = "mapid">
                        
                        </Col>
                        <Col></Col>
                        <Col>
                           {/*<Grafs/> */} 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default CovidApp