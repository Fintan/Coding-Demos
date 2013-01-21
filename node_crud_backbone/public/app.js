(function(){
	$(function(){
		
		window.resources = new Resources();
		resources.fetch();
		
		new MainView({collection: resources}).render();
		
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
			
		}

	},

	render: function() {

		this.$el.html("title: "+ this.model.display_title + "("+ this.model.resource_type +")");

		return this;

	}

});

var RecordsView = Backbone.View.extend({

	tagName: "ul",

	initialize: function(options) {

		if (options && options.collection) {

			this.collection = options.collection;
			
			this.collection.on('change', this.render, this);

		}

	},

	render: function() {

		this.$el.empty();
		
		var record = _.each(this.collection.toJSON(), function(ob) {
			
			this.$el.append(new RecordView({model: ob}).render().el);
			
		}, this);
		
		return this;

	}
});

var MainView = Backbone.View.extend({
	
	el:"#container",
	
	initialize: function(options) {

		if (options && options.collection) {

			this.collection = options.collection;
			
			this.records = new RecordsView({ collection: this.collection });

			//this.collection.on('update', this.render, this); //triggers when anything changes in the models
			this.collection.on('reset', this.render, this); //triggers when initially loaded and when anything changes in the models

		}

	},

	render: function() {

		this.$el.html(this.records.render().el);

		return this;

	}
	
});