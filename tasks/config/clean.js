module.exports = function(grunt) {

	grunt.config.set('clean', {
		js: ["js"],
		public: ["public"],
		orig: ["**/*.orig"]
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
};
