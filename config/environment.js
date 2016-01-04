/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bp-law-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'   maps.googleapis.com maps.gstatic.com",
      'font-src': "'self' data: fonts.gstatic.com"
      
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicy = {
    'script-src': "'self' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com  data:",
    'img-src': "'self' https://*.googleapis.com https://*.gstatic.com data:",
    'font-src': "'self' https://*.gstatic.com  data:",
    'style-src': "'self' 'unsafe-inline' https://*.googleapis.com  data:"
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
