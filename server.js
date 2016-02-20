var express = require("express");
var passport = require("passport");
var bodyParser = require("body-parser");
var Sequelize = require("sequelize");
var sessions = require("express-session");
var sequelize = new Sequelize("secret_clubhouse_db", "root");
var PORT = 7007;
var app = express();

var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var Member = sequelize.define("member", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
});

sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("LISTENING!");
  });
});

app.get("/", function(req, res){// "/" routing to localhost 7007, then add routes
  res.render("home"); // basically, it's requesting a response from the server, then rendering the response which includes home.handlebars
});

//remember to re-start the server

