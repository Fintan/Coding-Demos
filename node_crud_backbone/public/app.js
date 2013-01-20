(function(){
	$(function(){
		
		window.resources = new Resources();
		resources.fetch();
		var records = new RecordsView({collection: resources});
		$("#container").append(records.render().el);
		
	});
}());

var Resource = Backbone.Model.extend({
	
	idAttribute: '_id',
	/*
	defaults: function() {
		return {
			resource_type: "",
			display_title: "",
			language: "",
			meaningful_description: "",
			additional_text: "",
			viewable: "",
			media_type: "",
			categorization: "",
			GUID: "",
			standards: {},
			resource_type_id: "",
			media_type_id: ""
		};
	}
	*/
});


var Resources = Backbone.Collection.extend({
	
	url: "resources/",
	
	model:Resource,
	
    initialize: function (models, options) {
        
		
		
    }

});


var RecordView = Backbone.View.extend({

	tagName: "li",

	initialize: function(attributes, options) {

		if (options && options.model) {

			this.model = options.model;
			
			this.model.on('change', this.render, this);

		}

	},

	render: function() {

		//this.model.toJSON();
		this.$el.html("yo!");

		return this;

	}

});

var RecordsView = Backbone.View.extend({

	tagName: "ul",

	initialize: function(options) {

		if (options && options.collection) {

			this.collection = options.collection;
			
			this.collection.on('update', this.render, this);

		}

	},

	render: function() {

		console.log("Records:render");
		
		var record = _.each(this.collection.toJSON(), function(ob) {
			
			console.log("yo!");
			this.$el.innerHTML = new RecordView({model: ob}).render().el;
			
		}, this);
		
		return this;

	}
});