module.exports = function (grunt) {
  grunt.registerTask('dev', [
    'pre-dev',
    'express:dev',
    'watch:assets'
  ]);
};
