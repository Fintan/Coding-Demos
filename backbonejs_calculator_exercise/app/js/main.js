//this config only needed when not using require optimiser/build tool (i.e., not generating the build folder), doesn't appear to collide when building
require.config({
	paths: {
		"jquery": "libs/jquery",
		"underscore": "libs/underscore/underscore",
		"backbone": "libs/backbone/backbone",
		"calculator": "models/calculator",
		"application": "views/app",
		"calculatorControls": "views/calculatorControls",
		"calculatorOutput": "views/calculatorOutput",
		"alert": "views/alert",
		"romanNumerals": "utils/romanNumerals"
  	}
});


require(["jquery", "application"], 
function($, Application) {
    
	$(function() {
	
		var view = new Application();
		
    });

});
