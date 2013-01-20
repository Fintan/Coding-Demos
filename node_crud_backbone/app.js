var express = require('express');
	path = require('path'),
	http = require('http'),
 	books = require('./routes/books');
 	resources = require('./routes/resources');

var app = express();

app.configure(function () {
	
    app.set('port', process.env.PORT || 3001);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));

});
 
app.get('/books', books.findAll);
app.get('/books/:id', books.findById);


//http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/
app.get('/resources', resources.findAll);
app.get('/resources/:id', resources.findById);
app.post('/resources', resources.addResource);
app.put('/resources/:id', resources.updateResource);
app.delete('/resources/:id', resources.deleteResource);

 
//app.listen(3001);
//console.log('Listening on port 3001...');

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});