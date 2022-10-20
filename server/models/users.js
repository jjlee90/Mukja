module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
      username: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      }
    });
  
    return Users;
  };