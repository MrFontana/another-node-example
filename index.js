// Modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Controllers
var mainCtrl = require('./controllers/mainCtrl');

// Initialize app
var app = express();
app.use(bodyParser());
app.use(cors());

// HOSTS ANGULAR APP
app.use(express.static(__dirname + './../public'));

// ENDPOINTS
// req = request
// req.body, req.params, and req.query

// res = response
// status, send, json, end, etc...

// next = next
// Generally middleware
// app.get('/api/data', function() {
//  next() -------> run next function in line
// }, function(req, res, next) {
//
// });
app.get('/api/users', mainCtrl.getUsers);
app.post('/api/users', mainCtrl.addUser);
// params: url = '/api/:somthingOrOther <------- param' REQUIRED
// query: url = "/api <------- query" OPTIONAL
app.put('/api/users/name/:index', mainCtrl.updateName);
app.delete('/api/user/:index', mainCtrl.deleteUser);

// Listen
var port = 3000;
app.listen(port, function() {
	console.log("Listening on port " + port);
});
