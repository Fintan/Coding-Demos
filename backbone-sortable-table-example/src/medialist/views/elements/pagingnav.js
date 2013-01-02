define(["underscore", "jquery", "backbone", "medialist/models/labels", "jst"], 
function(_, $, Backbone, Labels, JST) {
	
	var PagingNav = Backbone.View.extend({

		el: '#nav',
		
		template: "src/templates/pagingnav.hbs",

		events: {
			"click #prev": "_onNavigation",
			"click #next": "_onNavigation"
		},

		initialize: function(attributes, options) {

			if (options && options.collection) {
				this.collection = options.collection;
				this.collection.on("firstPage", _.bind(this._onFirstPage, this));
				this.collection.on("lastPage", _.bind(this._onLastPage, this));
			}
			
		},
		
		_onFirstPage: function() {
			
			$("#prev").attr("disabled", "disabled");
			$("#next").removeAttr("disabled");
			
		},
		
		_onLastPage: function() {
			
			$("#next").attr("disabled", "disabled");
			$("#prev").removeAttr("disabled");
			
		},
		
		_onNavigation: function(e) {
			
			if(e.target.id === "prev") {
				
				this.collection.prevPage();
				
			}else if(e.target.id === "next") {
				
				this.collection.nextPage();
				
			}
			
		},
		
		render: function() {

			this.$el.html(JST[this.template]({}));

			this.collection.chkCurrentPage();
			
			return this;
			
		},

		destroy: function() {

			this.off();
			this.collection.off("firstPage");
			this.collection.off("lastPage");

		}
		
		
	});
	
	return PagingNav;

});