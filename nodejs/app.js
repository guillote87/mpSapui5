"use strict";
var express = require("express");
var cfenv = require("cfenv");
var cors = require("cors");

var route = require("./routes/route");
const users = require("./users.json");

let app = express();
// passport.use(new JWTStrategy(xsenv.getServices({uaa:{tag:'xsuaa'}}).uaa));
// app.use(passport.initialize());
// app.use(passport.authenticate('JWT', { session: false }));
//app.use('/', route);
app.use(cors());
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/users", function (req, res) {
  res.status(200).json(users);
});

let appEnv = cfenv.getAppEnv();
app.listen(appEnv.port, function () {
  console.log("server starting on " + appEnv.url);
});
