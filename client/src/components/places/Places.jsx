import { useState, useEffect } from "react"
import Map from "./Map"
import Loader from "../loader/Loader"
import PlaceCard from "./PlacesCard"
import PlaceReview from "./PlaceReview"

export default function Places(props) {
  // usestate to set fetched food data

  const [foodData, setFoodData] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedRestaurant, setSelectedRestaurant] = useState(0)

  useEffect(() => {
    setFoodData(props.data)
  })
  console.log(foodData)
  let mapData = foodData.map((place, index) => {
    return (
      <PlaceCard
        key={place.id}
        name={place.name}
        image={place.image_url}
        address={place.location.address1}
        index={index}
        setSelectedRestaurant={setSelectedRestaurant}
      />
    )
  })
  function mapReview() {
    return (
      <PlaceReview
        name={foodData[selectedRestaurant].name}
        url={foodData[selectedRestaurant].url}
        ratings={foodData[selectedRestaurant].rating}
        review_count={foodData[selectedRestaurant].review_count}
        price={foodData[selectedRestaurant].price}
        categories={
          foodData[selectedRestaurant].categories[selectedRestaurant]?.title
        }
        is_closed={foodData[selectedRestaurant].is_closed}
        address={foodData[selectedRestaurant].location.address1}
        phone={foodData[selectedRestaurant].display_phone}
      />
    )
  }
  // console.log(foodData[0])
  return (
    <div className="container">
      <h3>Places</h3>
      <div className="places-container">
        <div
          className="card-container"
          onClick={() => {
            console.log(foodData.name)
          }}
        >
          {foodData.length !== 0 ? mapData : ""}
        </div>
        <div className="map-container">
          {!loading ? <Map foodData={foodData} /> : <Loader />}
          {foodData.length > 0 && mapReview()}
        </div>
      </div>
    </div>
  )
}
