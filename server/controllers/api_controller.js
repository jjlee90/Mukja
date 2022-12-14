const fetch = require("node-fetch")
const express = require("express")
const api = express.Router()

// route => /api/location
// dynamically create url using location to fetch from yelp api
api.post("/location", (req, res) => {
  if (!req.body) {
    res.status(400).json("error")
  }
  var formData = req.body
  var { location, search, results } = formData
  if (!search) {
    search = "food"
  }
  if (!results) {
    results = "10"
  }
  console.log("this" + search)
  console.log("this" + location)

  async function get_rest() {
    let rest = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${search}&location=${location}&limit=${results}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    )
    let data = await rest.json()
    console.log(data)
    res.status(200).json(data)
  }
  get_rest()
})

module.exports = api
