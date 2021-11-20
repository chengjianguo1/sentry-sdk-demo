// config-overrides.js
const SentryCliPlugin = require('@sentry/webpack-plugin');
module.exports = function override(config, env) {
  config.devtool = 'source-map';
  config.plugins.push(
    new SentryCliPlugin({
      release: '0.0.1',
      authToken: 'ee65f6e67a684838b0dbf793389b6041c9698cd0ad8b45138aef7dff517a6001',
      url: 'http://39.105.175.193:9000',
      org: 'sentry',
      project: 'sentry-test-react', // sentry-test-react => sentry上建的项目名称
      urlPrefix: '~/',
      include: './build',
      ignore: ['node_modules'],
    })
  );
  return config;
}