var dirVars = require('../base/dir-vars.config.js');

module.exports = {
  loaders: [{
      test: /\.san$/,
      loader: 'san-loader'
    },
    {
      test: /\.js$/,
      include: dirVars.srcRootDir,
      loader: 'babel-loader',
      query: {
        presets: [
          ['env', {
            loose: true
          }]
        ],
        cacheDirectory: true,
        plugins: ['transform-runtime']
      }
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.html$/,
      include: dirVars.srcRootDir,
      loader: 'html-loader'
    },
    {
      // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
      // 如下配置，将小于8192byte的图片转成base64码
      test: /\.(png|jpg|gif)$/,
      include: dirVars.srcRootDir,
      loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]'
    },
    {
      // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
      test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
      include: dirVars.srcRootDir,
      loader: 'file-loader?name=static/fonts/[name].[ext]'
    }
  ]
};
