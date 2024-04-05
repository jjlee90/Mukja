import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);
  return null;
};

export default function Map({ foodData, defaultCenter }) {
  let locationPin = foodData.map((place, index) => {
    return (
      <Marker
        key={index}
        position={[place.coordinates.latitude, place.coordinates.longitude]}
      >
        <Popup>{place.name}</Popup>
      </Marker>
    );
  });

  return (
    <div style={{ position: "sticky", top: "0", height: "100vh" }}>
      <MapContainer
        center={[defaultCenter.latitude, defaultCenter.longitude]}
        zoom={13}
        scrollWheelZoom={false}
        className="map"
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locationPin}
        <RecenterAutomatically
          lat={defaultCenter.latitude}
          lng={defaultCenter.longitude}
        />
      </MapContainer>
    </div>
  );
}
