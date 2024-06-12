const { dependencies } = require('./package.json');

module.exports = {
  name: 'host',
  remotes: {
    shared_component: 'shared_component@http://localhost:3010/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
