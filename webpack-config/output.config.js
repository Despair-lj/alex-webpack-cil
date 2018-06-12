var dirVars = require('./base/dir-vars.config.js');
module.exports = {
  path: dirVars.buildDir,
  publicPath: '/',
  // [name]表示entry 每一项中的key，用以批量指定生成后文件的名称
  filename: '[name]/entry.js',
  chunkFilename: '[id].bundle.js'
};
