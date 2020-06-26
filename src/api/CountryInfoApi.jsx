import React, { Component } from 'react'
import axios from 'axios';
 

class CountryInfoApi extends Component {

    componentDidMount(){
        console.log(this.props.country)

        axios.get('https://disease.sh/v2/countries/'+ `${ this.props.country }`).then(res => {
           //console.log(res.data);
           this.props.addCountryInfo(res)
        });


        axios.get('https://disease.sh/v2/historical/' + `${ this.props.country }`).then(res => {
           //console.log(res.data);
           this.props.addCountryCases(res.data)
        })
        ;
    }

    render(){
        return(
          <br/>
        )
    }
}


export default CountryInfoApi 