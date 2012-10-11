/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		lint: {
			files: ['grunt.js', 'app/js/models/**/*.js', 'app/js/views/**/*.js', 'app/js/utils/**/*.js', 'test/tests.js']
		},
		qunit: {
			files: ['test/test.html']
		},
		concat: {
			dist: {
				src: ['<banner:meta.banner>', 'app/js/<%= pkg.name %>.js'],
				dest: 'build/js/<%= pkg.name %>.js'
			}
		},
		min: {
			dist: {
				src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
				dest: 'build/js/<%= pkg.name %>.min.js'
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
				$: false,
				require: false,
				define: false
			}
		},
		uglify: {},
		requirejs: {
			compile: {
				options: {
					baseUrl: "app/js",
					mainConfigFile: "app/app.build.js",
					out: "app/js/<%= pkg.name %>.js"
				}
			}
		},
		clean: ['build'],
		copy: {
			dist: {
				files: {
					"build/": ["template/**"]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task.
	grunt.registerTask('default', 'lint qunit clean copy requirejs:compile concat min');

};
