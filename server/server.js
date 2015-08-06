
var express = require('express');
var app = express();


var bodyParser = require('body-parser');


app.use(express.static(__dirname + './../client'));

var post = require('./controllers/post.js');
app.get('/getPosts',post.post);


app.listen(3000);
console.log("Server running at url http://localhost:3000/");

//database quries
// use posts;
//db.post.insert({"title":"your post title","author":"author name", "imageurl":"../images/fierworks.png"});
