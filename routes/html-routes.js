const path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    console.log("/");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", function (req, res) {
    console.log("/exercise");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/exercise?", function (req, res) {
    console.log("/exercise?");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/exercise/:id", function (req, res) {
    console.log("exercise/:id");
    res.sendFile(path.join(__dirname, "../public/exercise.html/?id=" + req.params.id));
  });

  app.get("/stats", function (req, res) {
    console.log("/stats");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  app.get("*", function (req, res) {
    console.log("*");
  });
};
