define(["underscore", "backbone", "medialist/models/resource", "medialist/collections/records", "medialist/views/list", "medialist/views/detail", "utils/services"], 
function(_, Backbone, Resource, Records, List, Detail, Services) {

	var Application = function() {}; 
	
	_.extend(Application.prototype, /*Backbone.Router,*/ {

		init: function() {
			
			var services = new Services();
			services.on('content_loaded', this._dataLoaded, this);
			services.loadContent('Content.json');
			
		},

		_dataLoaded: function(data) {
			
			this._start(data.response.results.result);
			
		},
		
		_start: function(data) {
			
			this._createCollection(data);
			
			this._showListView();
			
		},
		
		_createCollection: function(data) {
			
			var resources = [];

			_.each(data, function(value, key, list) {
				resources.push(value.content.resource);
			});
			
			this.records = new Records(resources);
			//5 records to be viewed per page
			this.records.initPaging(5);
			
		},
		
		_showListView: function() {
			
			if(!this.list) {
			
				this.list = new List(null, {
					collection: this.records
				});
			
				this.list.on("show_details", this._showDetailView, this);
			}
			
			this.list.show();
			
		},

		_showDetailView: function(id) {
			
			if(!this.detailView) {
				this.detailView = new Detail(null, {
					collection: this.records
				});

				this.detailView.on("show_table", this._showListView, this);
			}
			
			this.detailView.setRecordId(id);
			
			this.list.hide();
			this.detailView.render();
			
		}

	});

	return Application;

});