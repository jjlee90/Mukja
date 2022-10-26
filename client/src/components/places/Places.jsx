import { useState, useEffect } from "react"
import Map from "./Map"
import Loader from "../loader/Loader"
import PlaceCard from "./PlacesCard"
import PlaceReview from "./PlaceReview"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
export default function Places(props) {
  // usestate to set fetched food data

  // set food data from ../search/SearchBar
  const [foodData, setFoodData] = useState([])
  const [loading, setLoading] = useState(false)

  // track PlaceCard on click based on index e.g. foodData[0]
  const [selectedRestaurant, setSelectedRestaurant] = useState(0)

  // center point used to render map

  // setting data from SearchBar
  useEffect(() => {
    setFoodData(props.data)
    // setDefaultcenter(props.defaultCenter)
  })

  // map data to create PlaceCards. Used as trigger to Popup ./PlaceReview.jsx
  let mapData = foodData.map((place, index) => {
    return (
      <PlaceCard
        key={place.id}
        name={place.name}
        rating={place.rating}
        review_count={place.review_count}
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
  //test
  return (
    <div className="container">
      <h3>Places</h3>
      <div className="places-container">
        <div className="card-container">
          <Popup
            trigger={
              <div id="growth">{foodData.length !== 0 ? mapData : ""}</div>
            }
            modal
            nested
          >
            <div className="rev-cont">{foodData.length > 0 && mapReview()}</div>
          </Popup>
        </div>
        <div className="map-container">
          {foodData.length !== 0 ? (
            <Map foodData={foodData} defaultCenter={props.defaultCenter} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  )
}
