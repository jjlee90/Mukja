module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("review", {
      rating: {
        type: Sequelize.SMALLINT
      },
      content: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      }
    });
  
    return Review;
  };