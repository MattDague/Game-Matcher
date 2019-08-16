var exports = (module.exports = {});
var db = require("../models");

//sing up and sign in exports
exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signin");
};

exports.dashboard = function(req, res) {
  //search database for all videogames and export as an object
  db.videogame.findAll({}).then(function(dbVideoGameData) {
    var vgObject = {
      games: dbVideoGameData
    };
    res.render("dashboard", vgObject);
  });
};

exports.recommendations = function(req, res) {
  // searches user database and checks to make sure user isnt matched with themselves
  db.user.findAll().then(function(userData) {
    var randUser = Math.floor(Math.random() * userData.length);
    if (userData[randUser].id === req.user.id) {
      randUser = Math.floor(Math.random() * userData.length);
    }
    var matchArr = [];
    //searches game database to find id and info of game based on the game ids of a randomly selected user
    db.videogame
      .findAll({
        where: {
          id: userData[randUser].game1
        }
      })
      .then(function(response) {
        matchArr.push(response[0].dataValues);
        db.videogame
          .findAll({
            where: {
              id: userData[randUser].game2
            }
          })
          .then(function(response) {
            matchArr.push(response[0].dataValues);
            db.videogame
              .findAll({
                where: {
                  id: userData[randUser].game3
                }
              })
              .then(function(response) {
                matchArr.push(response[0].dataValues);
                db.videogame
                  .findAll({
                    where: {
                      id: userData[randUser].game4
                    }
                  })
                  .then(function(response) {
                    matchArr.push(response[0].dataValues);
                    //searches game database to find id and info of game based on the game ids saved in the user profile
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
                                    //renders the recommendations page and passes in the games and matches objects
                                    res.render("recommendations", {
                                      games: userGamesArr,
                                      matches: matchArr
                                    });
                                  });
                              });
                          });
                      });
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

exports.userlist = function(req, res) {
  db.user.findAll({}).then(function(userData) {
    res.json(userData);
  });
};
