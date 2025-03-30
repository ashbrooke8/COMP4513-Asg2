import {useState} from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  return (
    <MapContainer
      center={[props.latitude, props.longitude]}
      zoom={props.zoom}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <Marker position={[props.latitude, props.longitude]}>
    </Marker>
    </MapContainer>
  );
};

export default Map;
