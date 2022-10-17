import React, { useEffect, useState } from "react"
import "./places.scss"
import LocationMarker from "./LocationMarker"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"

Map.defaultProps = {
  center: {
    lat: 42.3254,
    lng: -122.8756,
  },
  zoom: 6,
}
export default function Map({ foodData, center, zoom }) {
  return (
    <div className="map">
      <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
