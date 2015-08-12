config = require('../appConfig.js');
module.exports = function (grunt) {
  grunt.config.set('sails-linker', {
    devJsJade: {
      options: {
        startTag: '// SCRIPTS',
        endTag: '// SCRIPTS END',
        fileTmpl: 'script(src="%s")',
        appRoot: 'public'
      },
      files: {
        'view/**/*.jade': config.jsfiles
      }
    },
    prodJsJade: {
      options: {
        startTag: '// SCRIPTS',
        endTag: '// SCRIPTS END',
        fileTmpl: 'script(src="%s")',
        appRoot: 'public/'
      },
      files: {
        'view/**/*.jade': 'js/hdviet.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sails-linker');
};
