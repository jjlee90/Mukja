module.exports = app => {
    const reviews = require("../controllers/review_controller")

    let router = require("express").Router()

    router.post("/", reviews.create)

    router.get("/", reviews.findAll)

    router.put('/:id', reviews.update)

    router.delete('/:id', reviews.delete)
    // The prefix route:
    app.use('/api/reviews', router)
}