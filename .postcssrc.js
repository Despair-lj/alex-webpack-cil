module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-url': {},
        cssnano: {
            preset: 'advanced',
            autoprefixer: false,
            'postcss-zindex': false
        }

        // to edit target browsers: use "browserslist" field in package.json
    }
}
