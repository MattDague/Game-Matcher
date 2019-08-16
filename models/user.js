module.exports = function(sequelize, Sequelize) {
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
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    game2: {
      type: Sequelize.INTEGER,
      defaultValue: 2
    },
    game3: {
      type: Sequelize.INTEGER,
      defaultValue: 3
    },
    game4: {
      type: Sequelize.INTEGER,
      defaultValue: 4
    }
  });

  return User;
};
