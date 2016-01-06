/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Any other options
    });

    app.import('bower_components/bootstrap/dist/css/bootstrap.css');
	app.import('bower_components/bootstrap/dist/js/bootstrap.js');

    return app.toTree();
};





