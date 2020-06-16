import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const SingleCountry = ({ data, country }) => {

    return(
        <h1>{data.countryChosen}</h1>
    )

}

export default SingleCountry

