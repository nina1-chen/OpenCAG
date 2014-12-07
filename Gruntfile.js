module.exports = function (grunt) {
	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),	
    browserify: {   
		dev: {
			src: [	'./apps/client/js/*.js',
					'!./apps/client/js/bundle.js'],
			dest: './apps/client/js/bundle.js',
			options: {
					transform: ['jadeify','debowerify']
				}
			}   
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['browserify:dev']);
  
};
