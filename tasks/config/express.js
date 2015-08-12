config = require('../appConfig.js');
module.exports = function(grunt) {

	grunt.config.set('express', {
		options: {
			port: config.PORT
		},
		dev: {
			options: {
				script: config.APP_SCRIPT
			}
		}
	});
	grunt.loadNpmTasks('grunt-express-server');
};