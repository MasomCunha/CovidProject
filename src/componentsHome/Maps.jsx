import React from "react";
import { Map, TileLayer, Circle, Popup } from "react-leaflet";
import "./Maps.css";




function Maps({ request, data, input, list }) {

  const Color = () => {
    if (request === "cases" || request === null) {
      return "yellow"
    }
    if (request === "deaths") {
      return "red"
    }
    if (request === "recovered") {
      return "green"
    }
  }

  const Radius = (e) => {
    if (request === "cases" || request === null) {
      return e.cases
    }
    if (request === "deaths") {
      return e.deaths
    }
    if (request === "recovered") {
      return e.recovered
    }
  }

  return (
    <Map center={[41.56, -8.39]} zoom={2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      { data ? (data.map(e =>
        <Circle
          center={[
            e.countryInfo.lat,
            e.countryInfo.long
          ]}
          fillColor={Color()}
          radius={Radius(e)}
          color={Color()}>
          <Popup>
            {"country: " + e.country}
            <br />
            {"cases: " + e.cases}
            <br />
            {"deaths: " + e.deaths}
            <br />
            {"recovered: " + e.recovered}
          </Popup>
        </Circle>))
        : (console.log("no data"))}
    </Map>
  );
}

export default Maps


{/*inserir no futuro


  {data ? (list === false ? (data.map(e => {
        if (e.country === input) {
          console.log(e.countryInfo.lat,
                e.countryInfo.long)
          return (
            <Circle
              center={[
                e.countryInfo.lat,
                e.countryInfo.long
              ]}
              fillColor={ Color() }
              color = { Color() }
              >
              <Popup>
                {"country: " + e.country}
                <br />
                {"cases: " + e.cases}
                <br />
                {"deaths: " + e.deaths}
                <br />
                {"recovered: " + e.recovered}
              </Popup>
            </Circle>)
        }
      })) : (
          data.map(e =>
            <Circle
              center={[
                e.countryInfo.lat,
                e.countryInfo.long
              ]}
              fillColor={Color()}
              radius={Radius(e)}
              color = {Color()}>
              <Popup>
                {"country: " + e.country}
                <br />
                {"cases: " + e.cases}
                <br />
                {"deaths: " + e.deaths}
                <br />
                {"recovered: " + e.recovered}
              </Popup>
            </Circle>
          )
        )) :
        (console.log("no data"))}





*/}

