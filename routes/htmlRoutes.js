var db = require("../models");

module.exports = function(app) {
  // default load page
  app.get("/", function(req, res) {
    res.redirect("/signin");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Logout function
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/signin");
  });

  app.get("/index", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
