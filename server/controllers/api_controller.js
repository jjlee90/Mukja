const fetch = require("node-fetch")
const express = require("express")
const api = express.Router()

// I dont think we need this route at the moment
// api.get("/yelp", (req, res) => {
//   async function get_rest() {
//     var zip = req.body
//     console.log(zip)
//     let rest = await fetch(
//       "https://api.yelp.com/v3/businesses/search?=food&location=23456&limit=3",
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.YELP_API_KEY}`,
//         },
//       }
//     )
//     let data = await rest.json()
//     // let res_data = JSON.stringify(data)
//     console.log(data)
//     res.status(200).json(data)
//   }
//   get_rest()
// })

api.post("/location", (req, res) => {
  if (!req.body) {
    res.status(400).json("error")
  }
  var formData = req.body
  var { location } = formData
  console.log(formData)

  async function get_rest() {
    let rest = await fetch(
      `https://api.yelp.com/v3/businesses/search?=food&location=${location}&limit=3`,
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
