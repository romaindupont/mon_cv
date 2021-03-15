import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
 return (
  <div id="mapid">
    <MapContainer center={[49.174534, -0.335659]} zoom={12} scrollWheelZoom={false} style={{height:180+'px'}}>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.174534, -0.335659]}>
          <Popup>
          I'm living in Caen.
          </Popup>
      </Marker>
    </MapContainer>
  </div>

)
}

export default Map;