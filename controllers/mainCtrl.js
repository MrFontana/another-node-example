var users = require('./../data');

module.exports = {
	getUsers: function(req, res, next) {
		res.send(users);
	},
	addUser: function(req, res, next) {
		var newUser = req.body;

		users.push(newUser);

		res.send(users);
	},
	updateName: function(req, res, next) {
		var index = req.params.index;
		var newName = req.body.name;

		users[index].name = newName;

		res.status(200)
			.send(users);
	},
	deleteUser: function(req, res, next) {
		var index = req.params.index;

		users.splice(index, 1);

		res.status(200)
			.send(users);
	}
};

// req.body = $http({data: 'this will be your body'});
// --------------------^
