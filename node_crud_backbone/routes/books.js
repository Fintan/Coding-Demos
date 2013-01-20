exports.findAll = function(req, res) {
    res.send([{name:'Javascript: The Good Parts'}, {name:'Understanding Backbone'}]);
};
 
exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "Javascript: The Good Parts", description: "A book about JS"});
};