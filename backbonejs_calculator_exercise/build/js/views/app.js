define(["backbone", "calculator", "calculatorControls", "calculatorOutput"], 
function(Backbone, CalculatorModel, CalculatorControls, CalculatorOutput) {
	
  	var AppView = Backbone.View.extend({

		initialize: function() {
			var model = new CalculatorModel();
			var display = new CalculatorOutput({model:model});
			var controls = new CalculatorControls({model:model});
		}
	
	});
	
	return AppView;
	
});



