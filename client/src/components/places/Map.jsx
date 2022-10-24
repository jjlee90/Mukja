import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "./places.scss"

export default function Map({ foodData, defaultCenter }) {
  let locationPin = foodData.map((place, index) => {
    return (
      <Marker
        key={index}
        position={[place.coordinates.latitude, place.coordinates.longitude]}
      >
        <Popup>{place.name}</Popup>
      </Marker>
    )
  })

  console.log(defaultCenter)

  return (
    <div className="map">
      <MapContainer
        center={[defaultCenter.latitude, defaultCenter.longitude]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locationPin}
      </MapContainer>
    </div>
  )
}
