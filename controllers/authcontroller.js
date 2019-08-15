var exports = (module.exports = {});
var db = require("../models");

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signin");
};

exports.dashboard = function(req, res) {
  db.videogame.findAll({}).then(function(dbVideoGameData) {
    // console.log(dbVideoGameData);
    var vgObject = {
      games: dbVideoGameData
    };
    res.render("dashboard", vgObject);
  });
};

exports.recommendations = function(req, res) {
  var userGamesArr = [];
  db.videogame
    .findAll({
      where: {
        id: req.user.game1
      }
    })
    .then(function(response) {
      userGamesArr.push(response[0].dataValues);
      db.videogame
        .findAll({
          where: {
            id: req.user.game2
          }
        })
        .then(function(response) {
          userGamesArr.push(response[0].dataValues);
          db.videogame
            .findAll({
              where: {
                id: req.user.game3
              }
            })
            .then(function(response) {
              userGamesArr.push(response[0].dataValues);
              db.videogame
                .findAll({
                  where: {
                    id: req.user.game4
                  }
                })
                .then(function(response) {
                  userGamesArr.push(response[0].dataValues);

                  db.videogame
                    .findAll({
                      where: {
                        id: req.user.game5
                      }
                    })
                    .then(function(response) {
                      userGamesArr.push(response[0].dataValues);

                      res.render("recommendations", { games: userGamesArr });
                      console.log(userGamesArr);
                      // res.json(userGamesArr);
                    });
                });
            });
        });
    });
};

exports.index = function(req, res) {
  res.render("index");
};

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect("/");
  });
};
