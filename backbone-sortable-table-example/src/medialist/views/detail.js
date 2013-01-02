define(["underscore", "jquery", "backbone", "jst"], 
function(_, $, Backbone, JST) {

	var Detail = Backbone.View.extend({

		el: "#view",
		
		template: "src/templates/details.hbs",
		
		events: {
			"click #back": "onBackClick"
		},
		
		initialize: function(attributes, options) {

			if (options && options.collection) {
				this.collection = options.collection;
			}
			
		},
		
		onBackClick: function(e) {
			
			this.trigger("show_table");
			
		},
		
		setRecordId: function(id) {
			
			this.resourceID = id;
			
			return this;
			
		},
		
		render: function() {

			if(!this.resourceID || !this.collection) {
				console.warn("Ensure that resourceID and collection have been set in DetailView");
				return this;
			}
			
			//search for the relevant row based on the id provided
			var record = _.find(this.collection.toJSON(), function(ob) {
				
				return (ob.id === this.resourceID);
				
			}, this);
			
			this.$el.fadeOut('fast', _.bind(function() {
				this.$el.empty();
				this.$el.html(JST[this.template]({
					record: record
				}));
				this.$el.fadeIn('fast');
			}, this));
				
			return this;

		},

		destroy: function() {

			this.off();

		}
	
	});
	
	return Detail;

});