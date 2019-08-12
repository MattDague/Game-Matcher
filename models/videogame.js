module.exports = function(sequelize, Sequelize) {
  var Videogame = sequelize.define("videogame", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    platform: {
      type: Sequelize.STRING,
      allowNull: false
    },
    developer: {
      type: Sequelize.STRING,
      allowNull: false
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
  return Videogame;
};
;