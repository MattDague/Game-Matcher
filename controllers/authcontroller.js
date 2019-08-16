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
  db.user.findAll().then(function(userData) {
    var randUser = Math.floor(Math.random() * userData.length);
    if (userData[randUser].id === req.user.id) {
      randUser = Math.floor(Math.random() * userData.length);
    }
    var matchArr = [];
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

                                    res.render("recommendations", {
                                      games: userGamesArr,
                                      matches: matchArr
                                    });
                                    console.log(userGamesArr);
                                    console.log(matchArr);
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
