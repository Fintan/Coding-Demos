define(["backbone"], 
function(Backbone) {

	var CalculatorControls = Backbone.View.extend({

		el: "#controls",

		events: {
			"click #numeral-buttons": "onNumeralClick",
			"click #operator-buttons": "onOperatorClick"
		},

		initialize: function() {

		},

		onNumeralClick: function(ev) {
			this.model.updateInput($(ev.target).text());
		},

		onOperatorClick: function(ev) {
			this.model.updateInput($(ev.target).text());
		}

	});

	return CalculatorControls;

});
