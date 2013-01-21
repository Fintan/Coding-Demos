var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('resourcedb', server);
 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'resourcedb' database");
        db.collection('resources', {safe:true}, function(err, collection) {
		populateDB();
			if (err) {
                console.log("The 'resources' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});
 
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving resource: ' + id);
    db.collection('resources', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 
exports.findAll = function(req, res) {
    db.collection('resources', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
 
exports.addResource = function(req, res) {
    var resource = req.body;
    console.log('Adding resource: ' + JSON.stringify(resource));
    db.collection('resources', function(err, collection) {
        collection.insert(resource, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}
 
exports.updateResource = function(req, res) {
    var id = req.params.id;
    var resource = req.body;
    console.log('Updating resource: ' + id);
	console.log(JSON.stringify(resource)); 
    
	db.collection('resources', function(err, collection) {
        collection.update({'_id': new mongo.ObjectID(id)}, _.omit(resource, '_id'), {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating resource: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(resource);
            }
        });
    });
}
 
exports.deleteResource = function(req, res) {
    var id = req.params.id;
    console.log('Deleting resource: ' + id);
    db.collection('resources', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
 
/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {
 
    var resources = [
    {
        resource_type: "Programming",
        display_title: "My Adventures in JavaScript",
        language: "en-us",
        meaningful_description: "It's more than just jQuery you know.",
        additional_text: "Copyright of Crazy Computing Inc.",
        viewable: "true",
        media_type: "flash",
        categorization: "Core Components",
        GUID: "NP_G05U02L10D4S21_2189",
        standards: {
            standard: {
                id: "LACC.5.RL.4.10",
                description: "By the end of the year, read and comprehend JavaScript, including closures, delegates, and jQuery widgets."
            }
        },
        resource_type_id: "1",
        media_type_id: "1"
    },
    {
        resource_type: "Programming",
        display_title: "HTML and CSS3",
        language: "en-us",
        meaningful_description: "Programming in HTML and CSS3 and the intricacies of browser support for the new fangled stuff.",
        additional_text: "Copyright of Crazy Computing Inc.",
        viewable: "true",
        media_type: "flash",
        categorization: "UI Development",
        GUID: "NP_G04U04L17D5S59_1284",
        standards: {
            standard: {
                id: "LACC.4.L.1.2.d",
                description: "Make use of the canvas view and rounded corners."
            }
        },
        resource_type_id: "1",
        media_type_id: "1"
    }];
 
    db.collection('resources', function(err, collection) {
        collection.insert(resources, {safe:true}, function(err, result) {});
    });
 
};