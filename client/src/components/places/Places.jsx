import { useState, useEffect } from "react";
import Map from "./Map";
import Loader from "../loader/Loader";
import PlaceCard from "./PlacesCard";
import PlaceReview from "./PlaceReview";
import Popup from "reactjs-popup";
import { Typography, Grid } from "@mui/material";
import "reactjs-popup/dist/index.css";
export default function Places(props) {
  // usestate to set fetched food data

  // set food data from ../search/SearchBar
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(false);

  // track PlaceCard on click based on index e.g. foodData[0]
  const [selectedRestaurant, setSelectedRestaurant] = useState(0);

  // setting data from SearchBar
  useEffect(() => {
    setFoodData(props.data);
  });

  let mapData = foodData.map((place, index) => {
    return (
      <PlaceCard
        key={place.id}
        business={place}
        setSelectedRestaurant={setSelectedRestaurant}
      />
    );
  });

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
    );
  }

  return (
    <Grid container mt={2}>
      <Typography
        variant="h3"
        gutterBottom
        color={"white"}
        sx={{ marginLeft: 2 }}
      >
        {foodData[0]?.location.city}, {foodData[0]?.location.state}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Popup
            trigger={
              <div id="growth">{foodData.length !== 0 ? mapData : ""}</div>
            }
            modal
            nested
          >
            {foodData.map((place) => (
              <PlaceCard
                key={place.id}
                business={place}
                setSelectedRestaurant={setSelectedRestaurant}
              />
            ))}
          </Popup>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          {foodData.length !== 0 ? (
            <Map foodData={foodData} defaultCenter={props.defaultCenter} />
          ) : (
            <Loader />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
