import React, { useState } from "react"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import { DynamicStar } from "react-dynamic-star"
import "./places.scss"

export default function ReviewInput({ name }) {
  const [formInput, setFormInput] = useState({ comments: "" })
  const [review, setReview] = useState({})

  function handleChange(e) {
    e.preventDefault()
    setFormInput((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value }
    })
  }

  async function handleClick(e) {
    e.preventDefault()

    const data = { ...formInput }

    let rest = await fetch("http://localhost:3000/api/comment", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let results = await rest.json()
    console.log(results)

    setReview(results)

    // navigate("/location")
  }
  console.log(review)
  console.log(formInput)
  return (
    <div className="review-input">
      <Popup trigger={<button>Leave a Review</button>} position="right center">
        <h3>{name}</h3>
        <p>Username</p>
        <p>
          <DynamicStar width={15} height={15} emptyStarColor={"#D3D3D3"} />
        </p>
        <form onClick={handleClick}>
          <textarea
            type="text"
            name="comments"
            value={formInput.value}
            placeholder="How was your experience here?"
            id="comments"
            onChange={handleChange}
          />
          <button>Cancel</button>
          <button>Post</button>
        </form>
      </Popup>
    </div>
  )
}
