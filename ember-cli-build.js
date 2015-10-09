/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var bootstrapPath = "vendor/bootstrap/";
  var bowerBootstrap = "bower_components/bootstrap/js";
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        bootstrapPath + 'scss'
      ]
    }
  });
  app.import(bowerBootstrap + '/collapse.js');
  app.import(bowerBootstrap + '/dropdown.js');
  app.import(bowerBootstrap + '/transition.js');
  app.import('vendor/lorem/lorem.js');

  return app.toTree();
};
