import React from "react"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

export default function ReviewInput() {
  return (
    <div>
      <Popup trigger={<button>Leave a Review</button>} position="right center">
        <h3>Wendy's</h3>
        <p>Username</p>
        <p>*****</p>
        <form action="">
          <input type="text" />
          <button>Cancel</button>
          <button>Post</button>
        </form>
      </Popup>
    </div>
  )
}
