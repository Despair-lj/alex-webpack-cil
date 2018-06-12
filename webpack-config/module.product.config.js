var ExtractTextPlugin = require('extract-text-webpack-plugin');
const moduleConfig = require('./inherit/module.config.js');

moduleConfig.loaders.push({
  test: /\.css$/,
  exclude: /node_modules|bootstrap/,
  loader: ExtractTextPlugin.extract('css?minimize&-autoprefixer!postcss')
});

module.exports = moduleConfig;
