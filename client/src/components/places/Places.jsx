import { useState, useEffect } from "react";
import Map from "./Map";
import Loader from "../loader/Loader";
import PlaceCard from "./PlacesCard";
import PlaceReview from "./PlaceReview";
import Popup from "reactjs-popup";
import { Typography, Grid, Button } from "@mui/material";
import "reactjs-popup/dist/index.css";
import { fetchNextPage, fetchLocation } from "../../services/restaurants";

export default function Places(props) {
  // usestate to set fetched food data

  // set food data from ../search/SearchBar
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(false);

  // track PlaceCard on click based on index e.g. foodData[0]
  const [selectedRestaurant, setSelectedRestaurant] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // setting data from SearchBar
  useEffect(() => {
    setFoodData(props?.data);
  }, [props?.data]);

  let mapData = foodData?.map((place, index) => {
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

  const totalPages = 5; //Math.ceil(props?.totalPlaces / itemsPerPage);

  const handlePageChange = async (pageNumber) => {
    try {
      setCurrentPage(pageNumber);
      const result = await fetchNextPage(
        props?.data[0]?.location.zip_code,
        pageNumber
      );

      setFoodData(result.businesses);
      props.setData(result.businesses);
      props.setDefaultCenter(result.region.center);

      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "instant" });
    } catch (error) {
      console.error(error);
    }
  };

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
          {foodData.map((place) => (
            <PlaceCard
              key={place.id}
              business={place}
              setSelectedRestaurant={setSelectedRestaurant}
            />
          ))}

          <Grid container spacing={1} justifyContent="center">
            {Array.from({ length: totalPages }, (_, i) => (
              <Grid item key={i}>
                <Button
                  sx={{ background: "white" }}
                  onClick={() => handlePageChange(i + 1)}
                  variant={currentPage === i + 1 ? "contained" : "outlined"}
                >
                  <Typography>{i + 1}</Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
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
