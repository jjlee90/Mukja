import { useState, useEffect } from "react"
import Map from "./Map"
import holder from "../../images/logo.png"
import Loader from "../loader/Loader"

export default function Places() {
  // usestate to set fetched food data
  const [foodData, setFoodData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true)
      let res = await fetch("http://localhost:3000/api/yelp") 

      if (!res.ok) {
        const message = `An error occurred: ${res.statusText}`
        window.alert(message)
        return
      }
      let data = await res.json()
      //console.log({ data })
      setFoodData({data})
      console.log(foodData)
      setLoading(false)
    }

    fetchFoods()

  }, [])
function sortPlaces() {}
  return (
    <div className="container">
      <h3>Places</h3>
      <div className="places-container">
        <div className="card-container">
          <div className="card">
            <img src={holder} alt="place-placeholder" className="holder" />
            <div>
              <p>Wendy's</p>
              <p>3.8 *** (521)</p>
              <p>555 College Ave</p>
            </div>
          </div>
          <div className="card">
            <img src={holder} alt="place-placeholder" className="holder" />
            <div>
              <p>Wendy's</p>
              <p>3.8 *** (521)</p>
              <p>555 College Ave</p>
            </div>
          </div>
          <div className="card">
            <img src={holder} alt="place-placeholder" className="holder" />
            <div>
              <p>Wendy's</p>
              <p>3.8 *** (521)</p>
              <p>555 College Ave</p>
            </div>
          </div>
        </div>
        <div className="map-container">
          {!loading ? <Map foodData={foodData} /> : <Loader />}
        </div>
      </div>
    </div>
  )
}
