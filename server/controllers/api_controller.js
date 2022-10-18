const fetch = require('node-fetch')
const express = require("express")
const api = express.Router()


api.get("/yelp", (req, res) => {
  async function get_rest() {
    let rest = await fetch(
      "https://api.yelp.com/v3/businesses/search?=food&location=23456&limit=3", 
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    )
    let data = await rest.json()
    // let res_data = JSON.stringify(data)
    console.log(data)
    res.status(200).json(data)
  }
  get_rest()
})

module.exports = api
