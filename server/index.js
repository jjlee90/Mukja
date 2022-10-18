const express = require("express")
const app = express()
<<<<<<< HEAD
=======
const cors = require('cors')
>>>>>>> b14645a02da9a40f5fdf2e564debdd23ebd36273

const bodyParser = require("body-parser")
const methodOverride = require("method-override")
require("dotenv").config()
const PORT = 3000

const yelp = express.Router()

app.use(methodOverride("_method"))
// app.use(express.json())
<<<<<<< HEAD

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

const placesController = require("./controllers/places_controller.js")
app.use("/places", placesController)
=======
app.use(cors()) // For development purposes, comment this line out before building (we will be running our server and client on the same port, so we won't need this)
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

const apiController = require("./controllers/api_controller.js")
app.use("/api", apiController)
>>>>>>> b14645a02da9a40f5fdf2e564debdd23ebd36273

app.listen(PORT)
