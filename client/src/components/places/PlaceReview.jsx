import React from "react"
import { DynamicStar } from "react-dynamic-star"
import "./places.scss"
import ReviewInput from "./ReviewInput"

export default function PlaceReview({
  image,
  name,
  url,
  is_closed,
  review_count,
  category,
  ratings,
  reviews,
  price,
  categories,
  address,
  phone,
}) {
  return (
    <div className="reviews">
      <div>
        <div>
          <h3>{name}</h3>
          <button src={url}>Website</button>
        </div>
        <div className="ratings">
          {ratings}
          <DynamicStar
            width={15}
            height={15}
            rating={ratings}
            emptyStarColor={"#D3D3D3"}
          />
          {review_count}
        </div>
        <p>
          {price} • {categories}
        </p>

        <p>Hours: {{ is_closed } ? "Open" : "Closed"}</p>
        <p>{category}</p>
        <p>Address: {address}</p>
        <p>Phone: {phone}</p>
      </div>

      <div>
        <div className="summary">
          <h3>Review summary</h3>
          <ReviewInput />
        </div>
        <p>{reviews}</p>
      </div>
    </div>
  )
}
