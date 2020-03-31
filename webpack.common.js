const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyPlugin([
            { from: './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js', to: 'libs' },
        ]),
      ],

};