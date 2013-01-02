require.config({

	//By default, all modules are located relative to this path. If baseUrl
	//is not explicitly set, then all modules are loaded relative to
	//the directory that holds the build file. If appDir is set, then
	//baseUrl should be specified as relative to the appDir.
	baseUrl: "./",

	//Comment out the optimize line if you want
	//the code minified by UglifyJS
	//optimize: "none",

	//keepBuildDir: false,

	//Set paths for modules. If relative paths, set relative to baseUrl above.
	//If a special value of "empty:" is used for the path value, then that
	//acts like mapping the path to an empty file. It allows the optimizer to
	//resolve the dependency to path, but then does not include it in the output.
	//Useful to map module names that are to resources on a CDN or other
	//http: URL when running in the browser and during an optimization that
	//file should be skipped because it has no dependencies.
	paths: {
		jquery: "../libs/jquery",
		underscore: "../libs/underscore-min",
		backbone: "../libs/backbone-min",
		handlebars: "../libs/handlebars/handlebars-1.0.rc.1.js",
		jst: "templates/jst/precompiled-templates"
	},

	name: "main",

	shim: {
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
		jst: {
			deps:["../libs/handlebars/handlebars-1.0.rc.1.js", "utils/handlebarhelpers.js"],
			exports: "JST"
		}
	}

});