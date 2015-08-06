var db = require('../models/postsModel.js');

exports.post = function(req,res){
	db.postsModel.find(function(err,docs){
		res.json(docs);
	});
};
