import React, { useEffect, useState } from "react"
import "./places.scss"
import LocationMarker from "./LocationMarker"
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"

export default function Map({ foodData, center, zoom, props }) {
  // const markers = foodData.map()
  const [coords, setCoords] = useState([])
  useEffect(() => {
    setCoords(foodData)
  })

  console.log(
    foodData[0].coordinates.latitude,
    foodData[0].coordinates.longitude
  )

  return (
    <div className="map">
      <MapContainer
        center={[
          foodData[0].coordinates.latitude,
          foodData[0].coordinates.longitude,
        ]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            foodData[0].coordinates.latitude,
            foodData[0].coordinates.longitude,
          ]}
        >
          <Popup>{foodData[0].name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
