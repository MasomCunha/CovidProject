import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "./Maps.css";



function Maps() {
  

  return (
    <Map center={[41.56, -8.39]} zoom={2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
}

export default Maps