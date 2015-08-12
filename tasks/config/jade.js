module.exports = function (grunt) {
  grunt.config.set('jade', {
    templates: {
      options: {
        pretty: true
      },
      files: [
        {
          expand: true,
          cwd: 'templates',
          src: ['**/*.jade'],
          dest: 'public/templates',
          ext: '.html'
        }
      ]
    },
    view: {
      options: {
        pretty: true
      },
      files: {
        "public/index.html": ["view/index.jade"]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jade');
};
