module.exports = function (grunt) {

  grunt.config.set('uglify', {
    minFile: {
      files: {
        'js/hdviet.min.js': ['js/hdviet.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
