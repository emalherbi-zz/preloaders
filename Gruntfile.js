module.exports = function(grunt) {
  'use strict';

  // Publish to GitHub Pages with Grunt
  grunt.loadNpmTasks('grunt-gh-pages');
  // Automatic notifications when tasks fail.
	grunt.loadNpmTasks('grunt-notify');

  grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),

    /* commit on gh-pages github */
    'gh-pages': {
      options: {
        base: 'docs/',
        message: 'auto-generated commit'
      },
      src: ['**/*']
    }

	});

	// tasks
  grunt.registerTask('build', [
      'gh-pages'
  ]);

  grunt.registerTask('deploy', [
      'build'
  ]);

  grunt.registerTask('default', [
      'build'
  ]);
};
