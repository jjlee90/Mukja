const db = require("../models/index.db")
const Review = db.reviews
const Op = db.Sequelize.Op



exports.create = (req, res) => {
  if (!req.body.rating) {
    res.status(400).send({
      message: "Cannot post a review with no rating.",
    })
    return
  }

  const review = {
    rating: req.body.rating,
    content: req.body.content,
    address: req.body.address,
  }

  Review.create(review)
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while creating the review.",
      })
    })
}

// Finds reviews given an address
exports.findAll = (req, res) => {
  const address = req.query.address
  //let condition = { address: { [Op.like]: `${address}`}}

  Review.findAll({ where: { address: `${address}` } })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "An error occurred while retrieving reviews, is the address correct?",
      })
    })
}

exports.update = (req, res) => {
  const reviewId = req.params.id

  // Can hardcode a change instead of putting req.body and it works, maybe i'm inputting my body in Postman wrong?

  // works now. needed to add key: value
  Review.update(
    {
      rating: req.body.rating,
      content: req.body.content,
      address: req.body.address,
    },

    {
      where: { id: reviewId },
    }
  )
    .then((promise) => {
      res.send({
        promise: promise, // returns 1 if successful, 0 if not.
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: "Can't update Review, an error occurred.",
      })
    })
}

exports.delete = (req, res) => {
  const reviewId = req.params.id
  const userId = req.params.user_id

  Review.destroy({
    where: { id: reviewId },
  }).then((promise) => {
    res.send({
      promise: promise,
      message: "Review deleted successfully.",
    })
  })
}
