define(["underscore", "backbone", "jquery"], 
function(_, Backbone, $) {
	
	var Services = function() {

			this.loadContent = _.bind(this.loadContent, this);

		};

	_.extend(Services.prototype, Backbone.Events, {

		loadContent: function(jsonUrl) {

			this._ajax({
				url: jsonUrl,
				dataType: 'json',
				data: {},
				context: this,
				success: function(data) {

					this.trigger('content_loaded', data);

				}
			});
		},

		_ajax: function() {

			$.ajax.apply($, Array.prototype.slice.call(arguments));

		}
	});
	
	return Services;

});