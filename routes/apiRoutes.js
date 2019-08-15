var db = require("../models");

module.exports = function(app) {
  // Get all games
  app.get("/api/videogames", function(req, res) {
    db.videogame.findAll().then(function(vgObject) {
      res.json(vgObject);
    });
  });

  // app.get("/api/videogames/", function(req, res) {
  //   db.sequelize.query("SELECT * FROM ")
  //     .findOne({
  //       include: [db.videogame],
  //       where: {
  //         username: req.params.user
  //       }
  //     })
  //     .then(function(userGames) {
  //       res.json(userGames);
  //     });
  // });

  // post new videogame to database
  app.post("/api/videogames", function(req, res) {
    console.log(req.body);
    db.videogame
      .create({
        name: req.body.name,
        platform: req.body.platform,
        year: req.body.year,
        genre: req.body.genre,
        score: req.body.score,
        developer: req.body.developer,
        rating: req.body.rating
      })
      .then(function(dbVideogame) {
        res.json(dbVideogame);
      });
  });

  app.put("/api/videogames", function(req, res) {
    db.user
      .update(
        {
          game1: parseInt(req.body.games[0]),
          game2: parseInt(req.body.games[1]),
          game3: parseInt(req.body.games[2]),
          game4: parseInt(req.body.games[3]),
          game5: parseInt(req.body.games[4])
        },
        {
          where: {
            username: req.user.username
          }
        }
      )
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });
};