({
    appDir: "./",
    baseUrl: "js/",
    dir: "../build",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    optimize: "none",
	//keepBuildDir: false,

    paths: {
        "jquery": "libs/jquery",
        "underscore": "libs/underscore/underscore",
        "backbone": "libs/backbone/backbone",
        "calculator": "models/calculator",
        "application": "views/app",
        "calculatorControls": "views/calculatorControls",
        "calculatorOutput": "views/calculatorOutput",
        "romanNumerals": "utils/romanNumerals"
    },

    modules: [
        {
            name: "main"
        }
    ]

})
