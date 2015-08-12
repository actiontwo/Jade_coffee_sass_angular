module.exports = function (grunt) {

  grunt.config.set('sass', {
    dist: {
      options: {
        lineNumbers: true
      },
      files: [
        {
          expand: true,
          cwd: 'styles',
          src: ['**/*.scss'],
          dest: 'public/css',
          ext: '.css'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
};
