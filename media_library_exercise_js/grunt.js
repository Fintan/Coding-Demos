/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'app/medialibrary/**/*.js','app/utils/**/*.js', 'test/test.js']
    },
    qunit: {
      files: ['test/**/*.html']
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
		console:false,
        jQuery: false,
		require:false, 
		define:false
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit');
  grunt.registerTask('test', 'qunit');

};
