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
    year: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    score: {
      type: Sequelize.STRING,
      allowNull: false
    },
    developer: {
      type: Sequelize.STRING,
      allowNull: false
    },
    rating: {
      type: Sequelize.STRING,
      allowNull: false
    },
    img: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });
  return Videogame;
};
