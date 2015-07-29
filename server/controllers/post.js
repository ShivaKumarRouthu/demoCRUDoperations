var db = require('../models/postsModel.js');

exports.post = function(req,res){
	console.log('rew;lsd');
	db.postsModel.find(function(err,docs){
		console.log('rew;lsd');
		res.json(docs);
	});	
};
