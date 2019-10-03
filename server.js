var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

var PORT = process.env.PORT || 8080;

// TEST

app.get('/login', function (req, res) {
    console.log(req);
    res.send("Hello")
})

require("./app/routes/apiRoutes")(app,path)
require("./app/routes/htmlRoutes")(app,path)

app.listen(PORT, function() {
    console.log ("server started on port 8080")
})



