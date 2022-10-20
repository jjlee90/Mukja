import React from "react"
import "./places.scss"

export default function PlaceCard({
  image,
  name,
  url,
  is_closed,
  review_count,
  category,
  rating,
  coordinates,
  address,
  phone,
  index,
  setSelectedRestaurant,
}) {
  return (
    <div className="card" onClick={() => setSelectedRestaurant(index)}>
      <img src={image} alt="place image" className="holder" />
      <div>
        <p>{name}</p>
        <p>{address}</p>
        <p>{phone}</p>
      </div>
    </div>
  )
}
