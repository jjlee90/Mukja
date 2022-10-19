import { useState, useEffect } from "react"
import Map from "./Map"
import Loader from "../loader/Loader"
import PlaceCard from "./PlacesCard"
import PlaceReview from "./PlaceReview"

export default function Places(props) {
  // usestate to set fetched food data
  const [foodData, setFoodData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true) //
      let res = await fetch("http://localhost:3000/api/yelp")

      if (!res.ok) {
        const message = `An error occurred: ${res.statusText}`
        window.alert(message)
        return
      }
      let data = await res.json()
      console.log(typeof data)
      console.log(data.businesses)
      setLoading(false)
      setFoodData(data.businesses)
    }

    fetchFoods()
    return
  }, [])
  console.log(foodData)
  let mapData = foodData.map((place) => {
    return (
      <PlaceCard
        key={place.id}
        name={place.name}
        image={place.image_url}
        address={place.location.address1}
      />
    )
  })
  function mapReview() {
    return (
      <PlaceReview
        name={foodData[0].name}
        url={foodData[0].url}
        ratings={foodData[0].rating}
        review_count={foodData[0].review_count}
        price={foodData[0].price}
        categories={foodData[0].categories[0].title}
        is_closed={foodData[0].is_closed}
        address={foodData[0].location.address1}
        phone={foodData[0].display_phone}
      />
    )
  }
  console.log(foodData[0])
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
