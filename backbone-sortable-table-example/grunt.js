/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		lint: {
			files: ['grunt.js', 'src/**/*.js']
		},
		qunit: {
			files: ['test/test.html']
		},
		min: {
			dist: {
				src: ['<banner:meta.banner>', '<config:requirejs.compile.options.out>'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint qunit'
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {
				console: false,
				jQuery: false,
				Backbone: false,
				$: false,
				_: false,
				FBOYLE: false,
				JST: false,
				Handlebars: false,
				mediademo: true,
				require: false,
				define: false
			}
		},
		uglify: {},
		clean: ["dist/*"],
		copy: {
			dist: {
				files: {
					"dist/": "resources/**"
				}
			}
		},
		handlebars: {
			compile: {
				options: {
					namespace: "JST",
					wrapped: true /*required due to grunt-contrib-handlebars:issue 6*/
				},
				files: {
					"src/templates/jst/precompiled-templates.js": ["src/templates/pagingnav.hbs", 
																	"src/templates/details.hbs",
																	"src/templates/table.hbs"]
				}
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "src/",
					mainConfigFile: "src/app.build.js",
					out: "dist/<%= pkg.name %>.js"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	// Default task.
	grunt.registerTask('default', 'require');
	grunt.registerTask('require', 'clean lint copy requirejs');

};
