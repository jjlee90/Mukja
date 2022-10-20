// const express = require("express")
// const places = express.Router()

// places.get("/", (req, res) => {
//   async function get_rest() {
//     let res = await fetch(
//       "https://api.yelp.com/v3/businesses/search?=food&location=23462&limit=3",
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.YELP_API_KEY}`,
//         },
//       }
//     )
//     let data = await res.json()
//     // let res_data = JSON.stringify(data)
//     console.log(typeof data)
//     console.log(data)
//   }
//   get_rest()
// })

// module.exports = places
