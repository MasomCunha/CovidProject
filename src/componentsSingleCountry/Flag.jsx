import React, { Fragment } from 'react'


const Flag = ({ countryInfo }) => {

    const flagAndName = () => {
        return(
        <Fragment>
            <p style={{ textAlign: "center", fontSize : "50px", fontFamily : "'Anton', sans-serif", color: "#1b2d24" }}>{countryInfo.data.country}</p>
            <p style={{ textAlign: "center"}}><img src={countryInfo.data.countryInfo.flag} width="200px" alt={countryInfo.data.country} /></p>
        </Fragment>
        )
    }
    
    return (
        <div> { countryInfo ? flagAndName() : <h1>Loading...</h1> }</div>
    )

}

export default Flag