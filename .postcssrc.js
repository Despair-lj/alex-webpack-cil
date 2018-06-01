module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-preset-env': {
            stage: 2,
            browsers: '>1%'
        },
        cssnano: {
            preset: 'advanced',
            autoprefixer: true,
            'postcss-zindex': false
        }
        // to edit target browsers: use "browserslist" field in package.json
    }
}
