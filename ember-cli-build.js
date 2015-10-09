/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var bootstrapPath = "bower_components/bootstrap/";
  var bowerBootstrap = "bower_components/bootstrap/dist/js/umd";
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        bootstrapPath + 'scss'
      ]
    }
  });
  app.import(bowerBootstrap + '/util.js');
  app.import(bowerBootstrap + '/collapse.js');
  app.import(bowerBootstrap + '/dropdown.js');
  app.import('vendor/lorem/lorem.js');

  return app.toTree();
};
