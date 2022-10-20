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
  address,
  phone,
  index,
  setSelectedRestaurant,
}) {
  // console.log(name)
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
