const express = require("express")
const app = express()
const cors = require("cors")

const bodyParser = require("body-parser")
const methodOverride = require("method-override")
require("dotenv").config()
const PORT = process.env.PORT

app.use(methodOverride("_method"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('../client/build'))

const db = require("./models/index.db")

db.sequelize
  .sync() // delete force obj after dev. it drops all tables then recreates them.
  .sync()
  .then(() => {})
  .catch((err) => {
    console.log("Couldn't sync db: " + err.message)
  })

const apiController = require("./controllers/api_controller.js")
app.use("/api", apiController)
require("./routes/review.routes")(app)

app.use("/api/users", require("./routes/userRoutes"))
app.listen(PORT, () => {
  console.log(`Server is rockin' on port ${PORT}`)
})
