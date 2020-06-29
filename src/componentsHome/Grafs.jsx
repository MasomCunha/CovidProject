import React, { Fragment } from 'react';
import { XAxis, YAxis, CartesianGrid, Area, Legend, AreaChart, Tooltip } from 'recharts';

const Grafics = ({ globalData, request }) => {

  const dataForGraf = [];

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
      dataForGraf.push(xData)
    }

    for (let i = 0; i < dataForGraf.length; i++){

      const dateReceived = dataForGraf[i].name.split("/");
      
      
    switch (dateReceived[0]) {
        case "1":
          dataForGraf[i].name = "Jan" + "/" + dateReceived[1];
            break;
        case "2":
          dataForGraf[i].name = "Fev" + "/" + dateReceived[1];
            break;
        case "3":
          dataForGraf[i].name = "Mar" + "/" + dateReceived[1];
            break;
        case "4":
          dataForGraf[i].name = "Apr" + "/" + dateReceived[1];
            break;
        case "5":
          dataForGraf[i].name = "May" + "/" + dateReceived[1];
            break;
        case "6":
          dataForGraf[i].name = "Jun" + "/" + dateReceived[1];
            break;
        case "7":
          dataForGraf[i].name = "Jul" + "/" + dateReceived[1];
            break;
        case "8":
          dataForGraf[i].name = "Aug" + "/" + dateReceived[1];
            break;
        case "9":
          dataForGraf[i].name = "Sep" + "/" + dateReceived[1];
            break;
        case "10":
          dataForGraf[i].name = "Out" + "/" + dateReceived[1];
            break;
        case "11":
          dataForGraf[i].name = "Nov" + "/" + dateReceived[1];
            break;
        case "12":
          dataForGraf[i].name = "Dec" + "/" + dateReceived[1];
            break;
        default:
          console.log("wrong month");
    } 
    
    }
   


  }

  const showArea = () => {
    if(request === "cases" || request === null) {
      return <Area type="monotone" dataKey="cases" stroke="#ffcc00" fill="#ffcc00"/>
    }
    if(request === "deaths"){
      return <Area type="monotone" dataKey="deaths" stroke="#ff0000" fill="#ff0000"/>
    }
    if(request === "recovered"){
      return <Area type="monotone" dataKey="recovered" stroke="#33cc33" fill="#33cc33"/>
    }
  }
    
 



  return (
    <div>
      {globalData ?
        (<Fragment>
          <h1 className="Grafic title" style={{'fontSize': '20px'}}>Covid world evolution since {dataForGraf[0].name}</h1>
          <AreaChart width={730} height={300} data={dataForGraf}>
            <XAxis dataKey= "name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip/>
            <Legend />
            { showArea() }
          </AreaChart>
        </Fragment>) :
        (<h1>Loading...</h1>)}
    </div>
  )
}


export default Grafics