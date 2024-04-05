import { Grid, Typography } from "@mui/material";

export default function Banner({ backgroundImage }) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 400,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 172, 213, .8)",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Discover the Best Local Restaurants
        </Typography>
        <Typography variant="subtitle1">
          Find popular restaurants near you with Mukja
        </Typography>
      </div>
    </Grid>
  );
}
