import React from "react";
import { DynamicStar } from "react-dynamic-star";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";

export default function PlaceCard({ business, setSelectedRestaurant }) {
  const renderBusinessHours = () => {
    if (business.hours) {
      return (
        <Grid item xs={12}>
          <Typography variant="body2" color="text.secondary">
            Hours:{" "}
            {business.hours[0].open.map((hour) => (
              <span
                key={hour.day}
              >{`${hour.day}: ${hour.start}-${hour.end}`}</span>
            ))}
          </Typography>
        </Grid>
      );
    }
    return null;
  };

  return (
    <Box p={2} bgcolor="#00ACD5" borderRadius={5}>
      <Card sx={{ display: "flex", maxWidth: "50vw" }}>
        <CardMedia
          component="img"
          height="250"
          image={business.image_url}
          alt={business.name}
          sx={{ width: "50%" }}
        />
        <CardContent sx={{ flex: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography gutterBottom variant="h5" component="div">
                {business.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                {business.categories
                  .map((category) => category.title)
                  .join(", ")}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                Rating:{" "}
                <DynamicStar
                  width={20}
                  height={20}
                  rating={business.rating}
                  emptyStarColor="#D3D3D3"
                  filledStarColor="#FFD700"
                />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                Reviews: {business.review_count}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                Address: {business.location.display_address.join(", ")}
              </Typography>
            </Grid>
            {renderBusinessHours()}
            <Grid item xs={12}>
              <Button size="small" color="primary" href={business.url}>
                Visit Yelp Page
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
