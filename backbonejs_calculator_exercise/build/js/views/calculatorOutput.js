define(["backbone"], 
function(Backbone) {
	
  	var DisplayView = Backbone.View.extend({

	    el: "#display",

		initialize: function() {
			this.model.on("DISPLAY_STRING_UPDATE", this.onDisplayStringUpdate, this);
			this.model.on("ALERT_MESSAGE", this.onAlertMessage, this);
		},
	
		onDisplayStringUpdate: function(str) {
			$(this.el).html(str);
		},
		
		onAlertMessage: function(mess, level) {
			console.log("Alert: "+ "("+level+") "+mess);
		}

	});
	
	return DisplayView;
	
});