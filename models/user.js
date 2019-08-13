module.exports = function (sequelize, Sequelize) {
  var User = sequelize.define("user", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    game1: {
      type: Sequelize.INTEGER
    },
    game2: {
      type: Sequelize.INTEGER
    },
    game3: {
      type: Sequelize.INTEGER
    },
    game4: {
      type: Sequelize.INTEGER
    },
    game5: {
      type: Sequelize.INTEGER
    }
  });

  return User;
};
