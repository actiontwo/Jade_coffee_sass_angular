module.exports = function(grunt) {

	grunt.config.set('cssmin', {
		dist: {
			src: ['public/css/main.css'],
			dest: 'public/css/main.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
