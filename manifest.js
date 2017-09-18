module.exports = {
  version: '1.2.0',
  init: function (pluginContext) {
    pluginContext.registerPolicy(require('./policies/example-policy'));
    pluginContext.registerCondition(require('./conditions/url-match'));
    pluginContext.registerGatewayRoute(require('./routes/hello-eg'));
    pluginContext.registerAdminRoute(require('./routes/hello-admin'));

    pluginContext.eventBus.on('hot-reload', function ({ type, newConfig }) {
      console.log('hot-reload', type, newConfig);
    });
    pluginContext.eventBus.on('http-ready', function ({ httpServer }) {
      console.log('http ready');
    });
    pluginContext.eventBus.on('https-ready', function ({ httpsServer }) {
      console.log('https ready');
    });
    pluginContext.eventBus.on('admin-ready', function ({ adminServer }) {
      console.log('admin ready');
    });
  },
  policies:['example'], // this is for CLI to automatically add to "policies" whitelist in gateway.config
  options: {  // This is for CLI to ask about params 'eg plugin configure example'
    baseUrl: {
      title: 'Base Url',
      description: 'the base url to initialize',
      type: 'string',
      required: true
    },
    maxRequestsPerSecond: {
      title: 'Max Requests per second',
      description: 'the max rps value',
      type: 'number'
    }
  }
};
