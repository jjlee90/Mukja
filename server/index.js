const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const methodOverride = require("method-override")
require("dotenv").config()
const PORT = 3000

const yelp = express.Router()

app.use(methodOverride("_method"))
// app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

const placesController = require("./controllers/places_controller.js")
app.use("/places", placesController)

app.listen(PORT)
