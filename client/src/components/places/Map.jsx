import React, { useEffect, useState } from "react"
import GoogleMapReact from "google-map-react"
import "./places.scss"
import LocationMarker from "./LocationMarker"
import { GoogleMap } from "@react-google-maps/api"
import { useLoadScript } from "@react-google-maps/api"

Map.defaultProps = {
  center: {
    lat: 42.3254,
    lng: -122.8756,
  },
  zoom: 6,
}
export default function Map({ foodData, center, zoom }) {
  // const markers = foodData.map()
  console.log(foodData)
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  )
}

// const mapContainerStyle = {
//   width: "100%",
//   height: "60vh",
// }
// const center = {
//   lat: 31.968599,
//   lng: -99.90181,
// }

// export default function Map() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//   })

//   if (loadError) return "Error loading Maps"
//   if (!isLoaded) return "Loading Maps"

//   return (
//     <div className="map">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={11}
//         center={center}
//       />
//     </div>
//   )
// }
