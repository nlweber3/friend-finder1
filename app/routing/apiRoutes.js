var path = require('path');

//require friends list from external file
var friends = require('../data/friends.js');       

module.exports = function(app) {
	app.get("./api/friends", function(req, res) {
		res.json(friends);
	});
}



// app.post("./api/friends", function(req, res) {
// 	var currentUser = req.body;

// });

// friends.push(user);