var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var configEntry = {
  app: path.resolve(dirVars.srcRootDir, './main.js')
};

module.exports = configEntry;
