import React from "react";
import restaurantHeaderBg from "../../images/restaurantHeaderBg.jpg";
import { Grid } from "@mui/material";
import Banner from "./Banner";
import PopularRestaurants from "./PopularRestaurants";

export default function Home() {
  return (
    <Grid container spacing={2} mb={5}>
      <Grid item xs={12}>
        <Banner backgroundImage={restaurantHeaderBg} />
        <PopularRestaurants />
      </Grid>
    </Grid>
  );
}
