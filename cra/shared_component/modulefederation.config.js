const { dependencies } = require('./package.json');

module.exports = {
  name: 'shared_component',
  exposes: {
    './Header': './src/Header',
    './Footer': './src/Footer',
    './Title': './src/Title',
    './SubTitle': './src/SubTitle',
  },
  filename: 'remoteEntry.js',
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
