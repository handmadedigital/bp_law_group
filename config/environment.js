/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bp-law-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    googleFonts: [
      'Open+Sans:300',
      'Roboto:300'
    ],
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' http://maps.googleapis.com https://www.youtube.com https://s.ytimg.com http://cdn.inspectlet.com http://hn.inspectlet.com", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' data: http://fonts.gstatic.com http://fonts.googleapis.com https://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' http://hn.inspectlet.com wss://inspectletws.herokuapp.com/", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self' data: http://csi.gstatic.com http://hn.inspectlet.com/",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com https://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': "'self'",
      'frame-src': "'self' https://www.youtube.com" // `media-src` will be omitted from policy, browser will fallback to default-src for media resources.
    }
  };

  ENV['mandrill'] = {
  api: {
    host: 'https://mandrillapp.com/api/1.0/',
    key: 'n-1PMRVHtL2Le8-9WGwi6A'
  },

  smtp: {
    host: 'smtp.mandrillapp.com',
    port: 587,
    username: 'carlos@tgld.co',
    password: 'n-1PMRVHtL2Le8-9WGwi6A'
  }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  ENV.googleMap = {
    // your configuration goes here
  };


  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
