watchFiles = [
  'view/**/*',
  'templates/**/*',
  'sass/**/*',
  'coffee/**/*',
  'lib/**/*',
  'images/**/*',
  'styles/**/*',
  'tasks/**/*',
  'Gruntfile.js'];

module.exports = function (grunt) {

  grunt.config.set('watch', {
    assets: {
      // Assets to watch:
      files: watchFiles,
      // When assets are changed:
      tasks: 'pre-dev'
    },
    assetsLocal: {
      // Assets to watch:
      files: watchFiles,
      // When assets are changed:
      tasks: 'pre-local'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
