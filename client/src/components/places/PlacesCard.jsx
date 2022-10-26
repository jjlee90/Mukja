import React from "react"
import { DynamicStar } from "react-dynamic-star"
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
      <div className="card-img">
        <img src={image} alt="place image" className="holder" />
      </div>
      <div className="card-body">
        <ul>
          <li>
            <h5>{name}</h5>
          </li>
          <li>
            <div className="rating">
              <span className="space">{rating}</span>
              <DynamicStar
                width={12}
                height={12}
                rating={rating}
                emptyStarColor={"#D3D3D3"}
              />
              ({review_count})
            </div>
          </li>
          <li>{address}</li>
          <li>{phone}</li>
        </ul>
      </div>
    </div>
  )
}
