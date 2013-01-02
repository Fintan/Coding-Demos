define(["underscore", "jquery", "backbone", "jst", "medialist/views/elements/pagingnav", "medialist/views/elements/table"], 
function(_, $, Backbone, JST, PagingNav, Table) {

	var List = Backbone.View.extend({

		initialize: function(attributes, options) {

			if (options && options.collection) {
				this.collection = options.collection;
			}else{
				throw new Error("collection needs to be passed as parameter in constructor");
			}
			
			this.table = new Table(null, {
				collection: this.collection
			});
			
			this.nav = new PagingNav(null, {
				collection: this.collection
			});
			
			this.table.on("show_details", _.bind(this._onShowDetails, this));
			
		},
		
		_onShowDetails: function(id) {
			
			this.trigger("show_details", id);
			
		},
		
		render: function() {

			this.table.render();
			this.nav.render();
			
			return this;

		},
		
		hide: function() {
			
			this.nav.$el.hide("fast");
		},

		show: function() {
			
			this.nav.$el.show("fast");
			this.render();
		},

		destroy: function() {

			this.table.off("show_details");
			this.table.destroy();
			this.nav.destroy();

		}
	
	});
	
	return List;

});