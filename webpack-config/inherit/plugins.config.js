var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var dirVars = require('../base/dir-vars.config.js');

var configPlugins = [
  /* 抽取出所有通用的部分 */
  new webpack.optimize.CommonsChunkPlugin({
    // 需要注意的是，chunk 的name不能相同！！！
    name: 'commons/commons',
    filename: '[name]/bundle.js',
    minChunks: 4
  }),
  /* 抽取出chunk 的css */
  new ExtractTextPlugin('[name]/styles.css'),
  /* 配置好Dll */
  new webpack.DllReferencePlugin({
    // 指定一个路径作为上下文环境，需要与DllPlugin 的context参数保持一致，建议统一设置为项目根目录
    context: dirVars.staticRootDir,
    // 指定manifest.json
    manifest: require('../../manifest.json'),
    // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin 的name参数保持一致
    name: 'dll'
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(dirVars.srcRootDir, './index.html'),
    // 将JS添加到底部
    inject: true,
    // 为静态资源生成hash值
    hash: true,
    // 将链接标签呈现为自闭
    xhtml: true
  })
];

module.exports = configPlugins;
