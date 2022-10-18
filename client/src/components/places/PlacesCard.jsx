import React from "react"

export default function PlaceCard({image, name, address, phone}) {
    //console.log(name)
    return (
        <div className="card">
        <img src={image} alt="place image" className="holder" />
        <div>
          <p>{name}</p>
          <p>{address}</p>
          <p>{phone}</p>
        </div>
      </div>
    )

}