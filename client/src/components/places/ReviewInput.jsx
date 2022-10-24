import React, { useState } from "react"

// create pop ups. used for leave a review button
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

// display fraction of a star based on number value
import { DynamicStar } from "react-dynamic-star"
import "./places.scss"

export default function ReviewInput({ name, address, setCreateReview }) {
  // input fields for post request /api/reviews
  const [formInput, setFormInput] = useState({
    content: "",
    rating: null,
    address: address,
  })

  // event handler to handle changes input fields
  function handleChange(e) {
    e.preventDefault()
    setFormInput((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value }
    })
  }

  async function handleClick(e) {
    e.preventDefault()

    const data = { ...formInput }

    // post request, create review with form data
    let rest = await fetch("http://localhost:3000/api/reviews", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let results = await rest.json()
    console.log(results)

    // passing results to  ./PlaceReview.jsx
    setCreateReview(results)
  }

  return (
    <div className="review-input">
      <Popup trigger={<button>Leave a Review</button>} position="right center">
        <h3>{name}</h3>
        <p>{address}</p>
        <p>Username</p>
        <p>
          <DynamicStar width={15} height={15} emptyStarColor={"#D3D3D3"} />
        </p>
        <form onClick={handleClick}>
          <label htmlFor="rating">
            <input
              type="number"
              name="rating"
              id="rating"
              max="5"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="content">
            <textarea
              type="text"
              name="content"
              value={formInput.value}
              placeholder="How was your experience here?"
              id="content"
              onChange={handleChange}
            />
          </label>
          <button>Cancel</button>
          <button>Post</button>
        </form>
      </Popup>
    </div>
  )
}
