const express = require("express")
const app = express()
const cors = require("cors")

const bodyParser = require("body-parser")
const methodOverride = require("method-override")
require("dotenv").config()
const PORT = 3000

app.use(methodOverride("_method"))
// app.use(express.json())
app.use(cors()) // For development purposes, comment this line out before building (we will be running our server and client on the same port, so we won't need this)
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

const apiController = require("./controllers/api_controller.js")
app.use("/api", apiController)

app.listen(PORT)
