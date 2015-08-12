module.exports = function (grunt) {

  var includeAll = require('include-all');

  function loadTasks(relPath) {
    return includeAll({
        dirname: require('path').resolve(__dirname, relPath),
        filter: /(.+)\.js$/
      }) || {};
  }

  function invokeConfigFn(tasks) {
    for (var taskName in tasks) {
      if (tasks.hasOwnProperty(taskName)) {
        tasks[taskName](grunt);
      }
    }
  }

  var taskConfigurations = loadTasks('./tasks/config'),
    registerDefinitions = loadTasks('./tasks/register');
  if (!registerDefinitions.default) {
    registerDefinitions.default = function (grunt) { grunt.registerTask('default', []); };
  }

  invokeConfigFn(taskConfigurations);
  invokeConfigFn(registerDefinitions);

};
