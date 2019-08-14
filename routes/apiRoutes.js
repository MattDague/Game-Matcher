var db = require("../models");

module.exports = function(app) {
  // Get all games
  app.get("/api/videogames", function(req, res) {
    db.videogame.findAll().then(function(vgObject) {
      res.json(vgObject);
    });
  });

  // post new videogame to database
  app.post("/api/videogames", function(req, res) {
    db.videogame
      .create({
        name: req.body.name,
        platform: req.body.platform,
        genre: req.body.genre,
        developer: req.body.developer,
        year: req.body.year
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
