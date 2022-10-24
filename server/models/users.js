module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("user", {
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    firstname: {
      type: Sequelize.STRING,
      //allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      //allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      //allowNull: false,
    },
  })

  return Users
}
