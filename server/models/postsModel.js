var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/posts');

var posts = mongoose.model('posts',new Schema({
	title:String,
	author:String,
	imageurl:String
}));


exports.postsModel = posts;