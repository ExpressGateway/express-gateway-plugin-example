module.exports = {
  version: 'v1.0',
  init: function (pluginManifest) {
    pluginManifest.policies.push(require('./policies/example-policy'));
    pluginManifest.conditions.push(require('./conditions/url-match'));
    pluginManifest.gatewayExtensions.push(require('./gateway-extensions/hello-eg'));
    pluginManifest.adminExtensions.push(require('./admin-extensions/hello-admin'));

    pluginManifest.eventBus.on('hot-reload', function ({ type, newConfig }) {
      console.log('hot-reload', type, newConfig);
    });
    pluginManifest.eventBus.on('http-ready', function ({ httpServer }) {
      console.log('http ready');
    });
    pluginManifest.eventBus.on('https-ready', function ({ httpsServer }) {
      console.log('https ready');
    });
    pluginManifest.eventBus.on('admin-ready', function ({ adminServer }) {
      console.log('admin ready');
    });
  }
};
