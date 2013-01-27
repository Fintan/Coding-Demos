var express = require('express'),
	path = require('path'),
	http = require('http');

var app = express();

app.configure(function() {

	app.set('port', process.env.PORT || 3000);
	app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
	app.use(express.cookieParser());
	app.use(express.session({secret: "keep this is a secret"}));
	app.use(express.bodyParser()), app.use(express.static(path.join(__dirname, 'public')));
	
});

app.post("/setsessionprops", function(req, res) {
	req.session.obj = req.body;
	res.send(req.body);
});

app.get("/getsessionprops", function(req, res) {
	res.send(req.session.obj);
});

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port "+ app.get("port"));
});
