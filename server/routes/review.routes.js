module.exports = app => {
    const reviews = require("../controllers/review_controller")

    let router = require("express").Router()

    router.post("/", reviews.create)


    // The prefix route:
    app.use('/api/reviews', router)
}