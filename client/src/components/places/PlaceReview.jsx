import React, { useState } from "react"

// display fraction of a star based on number value
import { DynamicStar } from "react-dynamic-star"
import "./places.scss"

// pop up when clicking leave a review btn. Click place card to reveal button
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
  // POST results passed from ./ReviewInput.jsx to renderReview()
  const [createReview, setCreateReview] = useState({})

  function renderReview() {
    console.log(createReview)
    return (
      <div>
        <hr />
        {/* test */}
        <p>{createReview.firstName}</p>
        <p>{createReview.rating}</p>
        <p>{createReview.content}</p>
        <hr />
      </div>
    )
  }
  return (
    <div className="reviews">
      <div>
        <h3>{name}</h3>
        <a href={url}>Website</a>
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

      <div>
        <div className="summary">
          <h3>Review summary</h3>
          <ReviewInput
            name={name}
            address={address}
            setCreateReview={setCreateReview}
          />
        </div>
        {createReview.content !== "" ? renderReview() : ""}
      </div>
    </div>
  )
}
