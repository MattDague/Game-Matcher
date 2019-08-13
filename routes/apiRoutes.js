var db = require("../models");


module.exports = function (app) {
  // Get all examples
  app.get("/api/videogames", function (req, res) {
    db.videogame.findAll().then(function (vgObject) {
      res.json(vgObject);
    });
  });

  // Create a new example
  app.post("/api/videogames", function (req, res) {
    db.videogame
      .create({
        name: req.body.name,
        platform: req.body.platform,
        genre: req.body.genre,
        developer: req.body.developer,
        year: req.body.year
      })

      .then(function (dbVideogame) {
        res.json(dbVideogame);
      });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
  app.put("/api/videogames", function(req, res) {
  console.log(req.body);

    db.user
      .update(
        {
          game1: parseInt(arr[0]),
          game2: parseInt(arr[1]),
          game3: parseInt(arr[2]),
          game4: parseInt(arr[3]),
          game5: parseInt(arr[4])
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
