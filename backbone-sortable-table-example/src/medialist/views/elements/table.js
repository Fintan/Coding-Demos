define(["underscore", "jquery", "backbone", "medialist/models/labels", "jst"], function(_, $, Backbone, Labels, JST) {

	var Table = Backbone.View.extend({

		el: "#view",

		template: "src/templates/table.hbs",

		events: {
			"click thead": "_onColumnClick"//,
			//"click tr[data-viewable='true']": "_onRowClick"
		},

		initialize: function(attributes, options) {

			if (options && options.template) {

				this.template = options.template;

			}

			if (options && options.collection) {

				this.collection = options.collection;
				this.collection.on("pageChange", _.bind(this._onNewPage, this));

			}

		},

		_onNewPage: function() {

			this.render();

		},

		_onRowClick: function(ev) {
			
			ev.stopPropagation();

			var $target = $(ev.target);
			
			var id = $target.parent().attr("id");

			if ($target.is("img")) {

				id = $(ev.target).attr("id");

			}

			if (id) {

				this.trigger("show_details", id);

			}
		},

		_onColumnClick: function(ev) {

			this.collection.sortAttr = ev.target.id;
			this.collection.sortAsc = !this.collection.sortAsc;
			this.collection.sortAll();

		},

		render: function() {

			this.$el.fadeOut('fast', _.bind(function() {
				this.$el.empty();
				this.$el.html(JST[this.template]({
					mediaItemsHeader: new Labels(),
					mediaItems: this.collection.toJSON()
				}));
				this.$el.fadeIn('fast');
				
				$("thead").css('cursor', 'pointer');
				$("tr[data-viewable='true']").css('cursor', 'pointer');
				
				//needed for a backbone bug when using a data attribute as a selector?
				$("table").delegate("tr[data-viewable='true']", "click", 
					_.bind(this._onRowClick, this));
				
				
			}, this));

			return this;

		},

		destroy: function() {

			this.off();
		}

	});

	return Table;

});
