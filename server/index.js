const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
require("dotenv").config()
const PORT = process.env.PORT || 3000

app.use(methodOverride("_method"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
// app.use(express.static(path.join(__dirname, "../client/build")))
// console.log(path.join(__dirname, "client", "build"))
// const db = require("./models/index.db")

// // serve static front end in production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"))

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   )
//   // app.use(express.static(path.join(__dirname, "client", "build")))
// }

// db.sequelize
//   .sync() // {force: false} delete force obj after dev. it drops all tables then recreates them.
//   .then(() => {})
//   .catch((err) => {
//     console.log("Couldn't sync db: " + err.message)
//   })

const apiController = require("./controllers/api_controller.js")
app.use("/api", apiController)
require("./routes/review.routes")(app)

app.use("/api/users", require("./routes/userRoutes"))
app.listen(PORT, () => {
  console.log(`Server is rockin' on port ${PORT}`)
})
