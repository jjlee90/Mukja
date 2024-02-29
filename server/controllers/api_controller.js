const fetch = require("node-fetch");
const express = require("express");
const api = express.Router();

// route => /api/location
// dynamically create url using location to fetch from yelp api
api.post("/location", (req, res) => {
  if (!req.body) {
    res.status(400).json("error");
  }
  var formData = req.body;
  var { location, search, results } = formData;
  if (!search) {
    search = "food";
  }
  if (!results) {
    results = "10";
  }
  console.log("this" + search);
  console.log("this" + location);

  async function get_rest() {
    let rest = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${search}&location=${location}&limit=${results}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );
    let data = await rest.json();
    console.log(data);
    res.status(200).json(data);
  }
  get_rest();
});

// List of popular cities in the USA
const popularCities = [
  "New York City, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
];

// Route => /api/popular-restaurants
// Fetches 6 most popular restaurants from a random popular city in the USA
api.get("/popular-restaurants", async (req, res) => {
  // Select a random city from the popularCities array
  const randomCity =
    popularCities[Math.floor(Math.random() * popularCities.length)];

  try {
    // Fetch restaurants from Yelp API
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=food&location=${randomCity}&limit=6`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data.businesses);
    } else {
      throw new Error("Failed to fetch restaurants");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = api;
