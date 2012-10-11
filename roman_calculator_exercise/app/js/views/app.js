define(["underscore", "backbone", "models/calculator", "views/calculatorControls", "views/calculatorOutput"], 
function(_, Backbone, CalculatorModel, CalculatorControls, CalculatorOutput) {

	var AppView = Backbone.View.extend({

		initialize: function() {
			var model = new CalculatorModel();
			var display = new CalculatorOutput({
				model: model
			});
			var controls = new CalculatorControls({
				model: model
			});
		}

	});

	return AppView;

});
