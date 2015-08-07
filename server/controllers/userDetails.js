var data = [
		{empId: "1001", empName: "Robin1", empEmail: "test1@gmail.com"},
		{empId: "1002", empName: "Robin2", empEmail: "test2@gmail.com"},
		{empId: "1003", empName: "Robin3", empEmail: "test3@gmail.com"},
		{empId: "1004", empName: "Robin4", empEmail: "tes4t@gmail.com"},
	];
	
	
exports.getFullDetails = function(req,res){
	var employee = {};
	for(var i in data) {
		if(req.parms== data[i].empId)
		{
			employee = data[i];
		}
	}
		res.send(employee);
};

exports.getIds = function(req,res) {
	var allIds = [];
	for(var i in data) {
		allIds.push(data[i].empId);
	}
	res.send(allIds);
};
