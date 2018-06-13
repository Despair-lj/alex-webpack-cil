var precss = require('precss');
var autoprefixer = require('autoprefixer');
// const pxToViewport = require('postcss-px-to-viewport');
// const viewportUnit = require('postcss-viewport-units');
module.exports = function postcss() {
  return [precss, autoprefixer({
    remove: false,
    browsers: ['ie >= 8', '> 1% in CN']
  })];
};

/*
 pxToViewport({
      viewportWidth: 1920,
      unitPrecision: 3,
      viewportUnit: 'vw',
      minPixelValue: 1,
      mediaQuery: false
    }),
    viewportUnit({})
*/
