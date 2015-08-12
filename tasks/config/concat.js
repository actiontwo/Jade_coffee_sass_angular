config = require('../appConfig.js');
module.exports = function(grunt) {
	grunt.config.set('concat', {
		jsFiles: {
			files: {
				'js/hdviet.js': config.jsfiles
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
