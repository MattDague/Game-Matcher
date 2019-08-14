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
    res.render("recommendations");
};

exports.index = function(req, res) {
    res.render("index");
};

exports.logout = function(req, res) {
    req.session.destroy(function() {
        res.redirect("/");
    });
};