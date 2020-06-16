import React, { Component } from 'react'
import axios from 'axios';
 

class CovidApi extends Component {


    componentDidMount(){
        axios.get('https://api.caw.sh/v2/countries').then(res => {
           console.log(res.data);
           this.props.addData(res)
        });
    }


    render(){
        return(
          /*  <ul>{this.state.data ? (this.state.data.map(element => <p key = {element.countryInfo._id}>{element.country} <img src={element.countryInfo.flag} width="50" alt= {element.country}/>
            </p>)) : "loading..."}</ul>*/<h1>hello</h1>
        )
    }
}


export default CovidApi