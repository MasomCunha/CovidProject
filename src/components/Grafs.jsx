import React, { Fragment } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend } from 'recharts';

const Grafics = ({ globalData }) => {

  const data1 = [];

  if (globalData !== null) {
    const arrayCases = Object.entries(globalData.cases)
    const arrayDeaths = Object.entries(globalData.deaths)
    const arrayRecovered = Object.entries(globalData.recovered)


    for (let i = 0; i < arrayCases.length; i++) {
      const xData = {};
      xData["name"] = arrayCases[i][0]
      xData["cases"] = arrayCases[i][1]
      xData["deaths"] = arrayDeaths[i][1]
      xData["recovered"] = arrayRecovered[i][1]
      data1.push(xData)
    }
    console.log(data1)


  }


  return (
    <div>
      {globalData ?
        (<Fragment>
          <h1 className="Grafic title">Covid world evolution since {data1[0].name}</h1>
          <LineChart width={730} height={300} data={data1}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Legend />
            <Line type="monotone" dataKey="cases" stroke="#ffcc00" />
            <Line type="monotone" dataKey="deaths" stroke="#ff0000" />
            <Line type="monotone" dataKey="recovered" stroke="#33cc33" />
          </LineChart>
        </Fragment>) :
        (<h1>Loading...</h1>)}
    </div>
  )
}


export default Grafics