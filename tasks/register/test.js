module.exports = function (grunt) {
  grunt.registerTask('test', [
    'clean:public',
    'clean:js',
    'coffee:compile',
    'jade:templates',
    'jst:dev',
    'concat:jsFiles',
    'sass:dist',
    'cssmin:dist',
    'uglify:minFile',
    'copy:dev',
    'copy:images',
    'copy:jsProd',
    'sails-linker:prodJsJade',
    'jade:view',
    'clean:js'
  ]);
};
