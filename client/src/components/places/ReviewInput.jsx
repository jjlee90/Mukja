import React, { useState } from "react";

// create pop ups. used for leave a review button
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

// display fraction of a star based on number value
import { DynamicStar } from "react-dynamic-star";

export default function ReviewInput({ name, address, setCreateReview }) {
  // input fields for post request /api/reviews
  const [formInput, setFormInput] = useState({
    content: "",
    rating: null,
    address: address,
  });

  // event handler to handle changes input fields
  function handleChange(e) {
    e.preventDefault();
    setFormInput((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  }

  async function handleClick(e) {
    e.preventDefault();
    const id = JSON.parse(await localStorage.getItem("user"))._id;
    const name = JSON.parse(await localStorage.getItem("user")).firstName;
    const data = { ...formInput, user_id: id, firstName: name };
    console.log(name);

    // post request, create review with form data
    let rest = await fetch(
      "http://ec2-52-206-211-87.compute-1.amazonaws.com/api/reviews",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let results = await rest.json();
    console.log(results);
    console.log(id);
    // passing results to  ./PlaceReview.jsx
    setCreateReview(results);
  }

  return (
    <div className="review-input">
      <Popup trigger={<button>Leave a Review</button>} modal nested>
        {(close) => (
          <div>
            <h3>{name}</h3>
            <p>{address}</p>

            <form onClick={handleClick}>
              <label htmlFor="rating">
                Rating:
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  max="5"
                  placeholder="Select 1-5"
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
              <div className="actions">
                <div className="modal">
                  <button className="close" onClick={close}>
                    Cancel
                  </button>
                </div>
                <button
                  className="button"
                  onClick={() => {
                    close();
                  }}
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        )}
      </Popup>
    </div>
  );
}
