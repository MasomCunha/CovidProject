import React, { Component, Fragment } from 'react'
import axios from 'axios';
 

class CovidApi extends Component {


    componentDidMount(){
        axios.get('https://disease.sh/v2/countries/').then(res => {
           //console.log(res.data);
           this.props.addData(res)
        });

        axios.get('https://disease.sh/v2/historical/all').then(res => {
           // console.log(res.data);
            this.props.addGlobalData(res)
         });
    }



    render(){
        return(
          <Fragment/>
        )
    }
}


export default CovidApi