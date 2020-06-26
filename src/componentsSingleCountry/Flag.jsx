import React, { Fragment } from 'react'

const Flag = ({ countryInfo }) => {

    const flagAndName = () => {
        return(
        <Fragment>
            <p style={{ textAlign: "center" }}><img src={countryInfo.data.countryInfo.flag} width="150" alt={countryInfo.data.country} /></p>
            <p style={{ textAlign: "center" }}>{countryInfo.data.country}</p>
        </Fragment>
        )
    }
    
    return (
        <div> { countryInfo ? flagAndName() : <h1>Loading...</h1> }</div>
    )

}

export default Flag