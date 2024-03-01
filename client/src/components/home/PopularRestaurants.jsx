import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
// api call to fetch popular restaurants
import { fetchPopularRestaurants } from "../../services/restaurants";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { mockRestaurantData } from "./mockRestaurantData";

const Rating = ({ value }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < value) {
      stars.push(<StarIcon key={i} color="primary" />);
    } else {
      stars.push(<StarBorderIcon key={i} color="primary" />);
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
      <Typography
        variant="body2"
        color="text.secondary"
        style={{ marginLeft: 4 }}
      >
        ({value})
      </Typography>
    </div>
  );
};
export default function PopularRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data =
          process.env.NODE_ENV === "development"
            ? mockRestaurantData
            : await fetchPopularRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography
          variant="h6"
          gutterBottom
          color="white"
          style={{ textAlign: "center" }}
        >
          Discover the best restaurants near you
        </Typography>
        <Typography paragraph color="white" style={{ textAlign: "center" }}>
          Mukja helps you find great places to eat based on your location.
          Explore menus, photos, and reviews to find your next dining
          experience.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            justifyContent: "center",
          }}
        >
          {restaurants?.map((restaurant, index) => (
            <Card key={index} style={{ width: 200, margin: 10 }}>
              <CardMedia
                component="img"
                height="100"
                image={restaurant.image_url}
                alt={restaurant.name}
                style={{ objectFit: "cover", borderRadius: 8 }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "100%",
                  }}
                >
                  {restaurant.name}
                </Typography>
                <Rating name="read-only" value={restaurant.rating} readOnly />
              </CardContent>
              {/* <CardActions style={{ justifyContent: "center" }}>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}
