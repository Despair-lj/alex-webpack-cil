'use strict';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoaders = function (options) {
    options = options || {};

    function generateLoaders(loaders) {
        var sourceLoader = loaders.map(function (loader) {
            let extraParamChar;
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?');
                extraParamChar = '&';
            } else {
                loader = loader + '-loader';
                extraParamChar = '?';
            }
            return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '');
        }).join('!');

        if (options.extract) {
            return ExtractTextPlugin.extract('style-loader', sourceLoader);
        } else {
            return ['style-loader', sourceLoader].join('!');
        }
    }

    return {
        css: generateLoaders(['css', 'postcss']),
        postcss: generateLoaders(['css', 'postcss']),
        less: generateLoaders(['css', 'less']),
        sass: generateLoaders(['css', 'sass?indentedSyntax']),
        scss: generateLoaders(['css', 'sass']),
        stylus: generateLoaders(['css', 'stylus']),
        styl: generateLoaders(['css', 'stylus'])
    };
};

module.exports = {
    loaders: cssLoaders()
};

// module.exports = {
//     postcss: [require('autoprefixer')()]
// };
