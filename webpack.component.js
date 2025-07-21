const { VueLoaderPlugin } = require('vue-loader');
const glob = require('glob');
const path = require('path');


const list = {}

const globDirPath = 'components/lib/**/index.js';

//实现按需引入
glob.sync(globDirPath).forEach(function(file) {
    const component = file.split(/[/.]/)[2]
    list[component] = `./${file}`
});
console.log(list)
module.exports = {
    entry: list,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].umd.js',
        library: 'ajKit',
        libraryTarget: 'umd'
    },
    mode: 'development',
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]   
            // },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader'
            //     }
            // },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]    
}