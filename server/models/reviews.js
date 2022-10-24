module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("review", {
    review_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rating: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  })

  return Review
}
