var express = require('express'),
	path = require('path'),
	http = require('http');

var app = express();

app.configure(function() {

	app.set('port', process.env.PORT || 8080);
	app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
	app.use(express.bodyParser()), app.use(express.static(path.join(__dirname, 'public')));

});

var auth = express.basicAuth(function(username, password) {
	return (username === 'joe' && password === 'pass');
}, "Restricted area, authorisation needed");

app.get('/hello', auth, function(req, res) {
	res.send('Hello World');
});

app.get('/helloAgain', function(req, res) {
	res.send('Hello World (No authentication was required)');
});

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});
