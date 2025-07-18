const { VueLoaderPlugin } = require('vue-loader');
const glob = require('glob');


const list = {}

const globDirPath = 'components/**/index.js';

glob.sync(globDirPath).forEach(function(file) {
    const component = file.split(/[/.]/)[1]
    list[component] = `./${file}`
});

module.exports = {
    entry: list,
    output: {
        path: __dirname + '/dist',
        filename: '[name].umd.js',
        library: 'mui',
        libraryTarget: 'umd'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]   
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]    
}