module.exports = function (grunt) {

  var templateFilesToInject = [
    './public/templates/**/*.html'
  ];

  grunt.config.set('jst', {
    options: {
      prettify: true,
      namespace: 'Templates',
      processName: function (filePath) {
        return filePath.replace(/.\/public\/templates\//, '').replace(/(\.html$)/, '').replace(/\//g, '.');
      }
    },
    dev: {

      // To use other sorts of templates, specify a regexp like the example below:
      // options: {
      //   templateSettings: {
      //     interpolate: /\{\{(.+?)\}\}/g
      //   }
      // },

      // Note that the interpolate setting above is simply an example of overwriting lodash's
      // default interpolation. If you want to parse templates with the default _.template behavior
      // (i.e. using <div></div>), there's no need to overwrite `templateSettings.interpolate`.

      files: {
        // e.g.
        // 'relative/path/from/gruntfile/to/compiled/template/destination'  : ['relative/path/to/sourcefiles/**/*.html']
        './js/templates.js': templateFilesToInject
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jst');
};
