define(["underscore", "backbone"], 
function(_, Backbone) {

	var Resource = Backbone.Model.extend({

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
	});
	return Resource;

});