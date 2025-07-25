const path  = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports  = {
    entry: path.resolve(__dirname, '../example/index.js'),
    mode: "development",
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'ajKit-ui.common.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
}