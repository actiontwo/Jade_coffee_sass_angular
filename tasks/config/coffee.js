module.exports = function (grunt) {

  grunt.config.set('coffee', {
    compile: {
      files: {
        'js/app.js': 'coffee/app.coffee', // 1:1 compile
        'js/config.js': 'coffee/config.coffee', // 1:1 compile
        'js/provider.js': ['coffee/provider/**/*.coffee'],// compile and concat into single file
        'js/controllers.js': ['coffee/controllers/**/*.coffee'],// compile and concat into single file
        'js/directive.js': ['coffee/directives/**/*.coffee'], // compile and concat into single file
        'js/service.js': ['coffee/service/**/*.coffee'], // compile and concat into single file
        'js/factory.js': ['coffee/factory/**/*.coffee'], // compile and concat into single file
        'js/filter.js': ['coffee/filter/**/*.coffee'], // compile and concat into single file
        'js/script.js': ['coffee/script.coffee'] // compile and concat into single file
      }
    },
    glob_to_multiple: {
      expand: true,
      flatten: true,
      cwd: 'coffee',
      src: ['**/*.coffee'],
      dest: 'coffee/js',
      ext: '.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
};
