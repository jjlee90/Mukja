import { useState, useEffect } from "react"
import Map from "./Map"
import Card from "./PlacesCard"
import Loader from "../loader/Loader"
import PlaceCard from "./PlacesCard"

export default function Places() {
  // usestate to set fetched food data
  const [foodData, setFoodData] = useState({})
  const [loading, setLoading] = useState(false)
  let data = undefined
  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true) //
      let res = await fetch("http://localhost:3000/api/yelp")

      if (!res.ok) {
        const message = `An error occurred: ${res.statusText}`
        window.alert(message)
        return
      }
      data = await res.json()
      //console.log({ data })

      setLoading(false)
      return data
      //console.log(data.businesses[0])
    }
    fetchFoods().then((data) => {
      setFoodData(data)
      console.log(foodData)
    })
  }, [])
  return (
    <div className="container">
      <h3>Places</h3>
      <div className="places-container">
        <div className="card-container">
          <PlaceCard
            name={foodData.businesses[0].name}
            image={foodData.businesses[0].image_url}
            address={foodData.businesses[0].location.address1}
          />
          <PlaceCard
            name={foodData.businesses[1].name}
            image={foodData.businesses[1].image_url}
            address={foodData.businesses[1].location.address1}
          />
          <PlaceCard
            name={foodData.businesses[2].name}
            image={foodData.businesses[2].image_url}
            address={foodData.businesses[2].location.address1}
          />
        </div>
        <div className="map-container">
          {!loading ? <Map foodData={foodData} /> : <Loader />}
        </div>
      </div>
    </div>
  )
}
