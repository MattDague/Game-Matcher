module.exports = function(sequelize, Sequelize) {
  var userVideoGame = sequelize.define("UserVideoGame", {
    userID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    videoGameID: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
  return userVideoGame;
};
