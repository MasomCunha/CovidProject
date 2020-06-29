import React, { Fragment } from 'react';
import { XAxis, YAxis, CartesianGrid, Legend, LineChart, Tooltip, Line } from 'recharts';

const Grafics = ({ countryCases }) => {


  const dataForGraf = [];

  if (countryCases !== null) {

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

    for (let i = 0; i < dataForGraf.length; i++) {

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



  return (
    <div>
      {countryCases ?
        (<Fragment>
          <h1 className="Grafic title" style={{ fontSize: '20px' }}>Covid evolution since {dataForGraf[0].name}</h1>
          <LineChart width={730} height={300} data={dataForGraf}>
            <XAxis dataKey="name"
              interval={2} 
              stroke = "black"
              />
            <YAxis
              stroke = "black"
              tickFormatter={(tick) =>
                new Intl.NumberFormat().format(tick / 1000) + 'K'} />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip />
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