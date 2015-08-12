config = require('../appConfig.js');
module.exports = function (grunt) {
  grunt.config.set('copy', {
    dev: {
      files: [
        {
          expand: true,
          cwd: 'styles',
          src: ['**/*', '!*.scss'],
          dest: 'public/css'
        }
      ]
    },
    images: {
      files: [
        {
          expand: true,
          cwd: 'images',
          src: ['**/*'],
          dest: 'public/images'
        }
      ]
    },
    js: {
      files: [
        {
          expand: true,
          cwd: '',
          src: config.jsfiles,
          dest: 'public'
        }
      ]
    },
    jsProd: {
      files: [
        {
          expand: true,
          cwd: '',
          src: 'js/hdviet.min.js',
          dest: 'public'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
