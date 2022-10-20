const db = require('../models/index.db')
const Review = db.reviews
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    if (!req.body.rating) {
        res.status(400).send({
            message: "Cannot post a review with no rating."
        })
        return;
    }

    const review = {
        rating: req.body.rating,
        content: req.body.content,
        address: req.body.address,
    }

    Review.create(review)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occured while creating the review."
            })
        })
}