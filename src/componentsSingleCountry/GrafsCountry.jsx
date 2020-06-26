import React, { Fragment } from 'react';
import { XAxis, YAxis, CartesianGrid, Legend, LineChart, Tooltip, Line } from 'recharts';

const Grafics = ({ countryCases }) => {

  const dataForGraf = [];

  if (countryCases !== null) {
    console.log(countryCases)
    const arrayCases = Object.entries(countryCases.timeline.cases)
    const arrayDeaths = Object.entries(countryCases.timeline.deaths)
    const arrayRecovered = Object.entries(countryCases.timeline.recovered)


    for (let i = 0; i < arrayCases.length; i++) {
      const xData = {};
      xData["name"] = arrayCases[i][0]
      xData["cases"] = arrayCases[i][1]
      xData["deaths"] = arrayDeaths[i][1]
      xData["recovered"] = arrayRecovered[i][1]
      dataForGraf.push(xData)
    }
    console.log(dataForGraf)
  }

  

  return (
    <div>
      {countryCases ?
        (<Fragment>
          <h1 className="Grafic title" style={{'fontSize': '20px'}}>Covid world evolution since {dataForGraf[0].name}</h1>
          <LineChart width={730} height={300} data={dataForGraf}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="cases" stroke="#ffcc00" />
            <Line type="monotone" dataKey="deaths" stroke="#ff0000" />
            <Line type="monotone" dataKey="recovered" stroke="#33cc33" />
          </LineChart>
        </Fragment>) :
        (<h1>There is no Information</h1>)}
    </div>
  )
}


export default Grafics