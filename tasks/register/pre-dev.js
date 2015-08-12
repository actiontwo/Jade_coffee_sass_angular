module.exports = function (grunt) {
  grunt.registerTask('pre-dev', [
    'coffee:compile',
    'sass:dist',
    'copy:dev',
    'copy:images',
    'jade:templates',
    'jst:dev',
    'copy:js',
    'sails-linker:devJsJade',
    'jade:view',
    'clean:js'
  ]);
};
