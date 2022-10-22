module.exports = (sequelize, Sequelize) => {
  const Places = sequelize.define("place", {
    place_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    review_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
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
  })

  return Review
}
