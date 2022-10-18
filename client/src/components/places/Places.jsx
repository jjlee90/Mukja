import { useState, useEffect } from "react"
import Map from "./Map"
import Card from "./PlacesCard"
import Loader from "../loader/Loader"
import PlaceCard from "./PlacesCard"

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
      console.log(data.businesses)
      setLoading(false)
      setFoodData(data.businesses)
    }

    fetchFoods()
    return
  }, [])

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

  console.log(foodData)
  return (
    <div className="container">
      <h3>Places</h3>
      <div className="places-container">
        <div className="card-container">
          {foodData.length != 0 ? mapData : ""}
        </div>
        <div className="map-container">
          {!loading ? <Map foodData={foodData} /> : <Loader />}
        </div>
      </div>
    </div>
  )
}
