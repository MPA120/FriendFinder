module.exports = function (app, path) {
    // home route
    app.get("/", function (req, res) {
      // console.log(req);
      res.sendFile(path.join(__dirname + "/../public", "home.html"))
    })
    app.get("/survey", function (req, res) {
      // console.log(req);
      res.sendFile(path.join(__dirname + "/../public", "survey.html"))
    })
  }