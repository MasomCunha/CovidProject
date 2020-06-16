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
          <br/>
        )
    }
}


export default CovidApi