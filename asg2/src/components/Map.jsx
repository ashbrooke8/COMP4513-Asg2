import {useState, useEffect} from "react"
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
    <Marker position={[props.latitude, props.longitude]}/>
    <UpdateMap latitude={props.latitude} longitude={props.longitude} />

    </MapContainer>
  );
};

//https://leafletjs.com/examples/zoom-levels/ to reference later on the map methods
const UpdateMap = (props) => {
  const map = useMap();

  useEffect(() => {
    map.setView([props.latitude, props.longitude], map.getZoom());
  }, [props.latitude, props.longitude, map]);

  return null;
};


export default Map;
