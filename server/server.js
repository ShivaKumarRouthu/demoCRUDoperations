
var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + './../client'));

var userDetails = require('./controllers/userDetails.js');
app.get('/getIds',userDetails.getIds);
app.get('/getFullDetials/*',userDetails.getFullDetails);


app.listen(3000);
console.log("Server running at url http://localhost:3000/");

//database quries
