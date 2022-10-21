const express = require("express")
const app = express()
const cors = require("cors")

const bodyParser = require("body-parser")
const methodOverride = require("method-override")
require("dotenv").config()
const PORT = 3000

// app.use(methodOverride("_method"))

app.use(cors()) // For development purposes, comment this line out before building (we will be running our server and client on the same port, so we won't need this)
app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use(express.json())

const db = require("./models/index.db")

db.sequelize
  .sync({ force: false }) // delete force obj after dev. it drops all tables then recreates them.
  .then(() => {
    console.log("Synced database")
  })
  .catch((err) => {
    console.log("Couldn't sync db: " + err.message)
  })

const apiController = require("./controllers/api_controller.js")
app.use("/api", apiController)
require("./routes/review.routes")(app)
app.listen(PORT, () => {
  console.log(`Server is rockin' on port ${PORT}`)
})
