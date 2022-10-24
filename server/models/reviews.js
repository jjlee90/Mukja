module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("review", {
      rating: {
        type: Sequelize.SMALLINT,
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
      }
    });
  
    return Review;
  };