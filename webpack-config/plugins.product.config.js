var webpack = require('webpack');
var pluginsConfig = require('./inherit/plugins.config.js');

/* webpack1下，用了压缩插件会导致所有loader 添加min配置，而autoprefixser 也被定格到某个browsers 配置 */
// pluginsConfig.push(new webpack.optimize.UglifyJsPlugin({
//   compress: {
//     warnings: false,
//   },
// }));

pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: true
}));

pluginsConfig.push(new webpack.NoErrorsPlugin()); // 配合CLI的--bail，一出error 就终止webpack的编译进程

module.exports = pluginsConfig;
