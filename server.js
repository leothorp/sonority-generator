var express = require('express');
var app = express();
//app.use('/', express.static(__dirname + '/client'));
app.use('/', express.static(__dirname + '/client'));
var port = process.env.PORT || 5000;
app.listen(port);