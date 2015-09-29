/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var bootstrapPath = "vendor/bootstrap/";
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        bootstrapPath + 'scss'
      ]
    }
  });
  // app.import(bootstrapPath + 'js/[module].js');

  return app.toTree();
};
