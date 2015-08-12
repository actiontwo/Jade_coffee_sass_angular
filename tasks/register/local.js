module.exports = function (grunt) {
  grunt.registerTask('local', [
    'pre-local',
    'express:dev',
    'watch:assetsLocal'
  ]);
};
