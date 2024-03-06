import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Grid } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../images/mukjaLogo.png";
import { fetchLocation } from "../../services/restaurants.js";

export default function SearchBar(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    search: "",
    location: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleClick(e) {
    e.preventDefault();
    const data = { ...formData };

    let rest = await fetchLocation(data);

    let results = await rest.data;

    props.setTotalPlaces(results?.total);
    props.setData(results?.businesses);
    props.setDefaultCenter(results?.region.center);
    navigate("/places");

    setFormData({
      search: "",
      location: "",
    });
  }

  return (
    <Grid container alignItems="center" sx={{ outline: "none" }}>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ outline: "none" }}>
        <img
          src={logo}
          alt="logo"
          style={{ cursor: "pointer", outline: "none" }}
          onClick={() => navigate("/")}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={9}>
        <form onSubmit={handleClick} style={{ width: "100%" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Search for restaurants..."
                name="search"
                value={formData.search}
                onChange={handleChange}
                variant="outlined"
                size="small"
                // InputLabelProps={{
                //   style: { color: "black" },
                // }}
                sx={{ backgroundColor: "#ffffff" }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="City, State or Zip Code"
                name="location"
                value={formData.location}
                onChange={handleChange}
                variant="outlined"
                size="small"
                InputLabelProps={
                  {
                    // style: { color: "#ffe239" },
                  }
                }
                style={{ backgroundColor: "#ffffff" }}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#ffe239",
                  color: "#00ACD5",
                  fontWeight: "bold",
                }}
              >
                <AiOutlineSearch style={{ marginRight: 5 }} />
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
