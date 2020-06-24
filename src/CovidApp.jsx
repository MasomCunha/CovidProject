import React, { Component } from 'react'
import './CovidApp.css';
import CovidApi from './api/CovidApi.jsx'
import { Container, Row, Col } from 'reactstrap';
import InputCountry from './components/InputCountry.jsx';
import NavOptions from './components/Navbar.jsx';
import CovidList from './components/List.jsx';
import Grafs from './components/Grafs.jsx'
import Maps from './components/Maps.jsx'

class CovidApp extends Component {

    state = {
        data : null,
        globalData : null,
        request : null,
        input : '',
        list: true,
        sortType: ''
    }

    addData = (res) =>{
        this.setState({ data : res.data })
    }

    addGlobalData = (res) => {
        this.setState({globalData: res.data})
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
                <h1 className = "title">InfoCovid</h1>
                <br/>
                <Container >
                    <Row xs= "2">
                        <Col sm={{ size: 4 }}>
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
                            <CovidApi 
                            addData = { this.addData }
                            addGlobalData = { this.addGlobalData}
                            />
                            <CovidList 
                                data = { this.state.data }    
                                request = { this.state.request }
                                input = { this.state.input }
                                list = { this.state.list }
                                sortType = { this.state.sortType }
                                />
                        </Col>
                        <Col sm={{ size: 8 }}>
                            <Maps
                            data = { this.state.data }    
                            request = { this.state.request }
                            list = { this.state.list }
                            input = { this.state.input }/>

                            <br/>
                             <Grafs
                                 globalData = {this.state.globalData}
                             /> 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default CovidApp