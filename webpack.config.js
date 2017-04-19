const path = require('path');

module.exports = {
    // The absolute path that our (client-side) code resides in
    context: path.join(__dirname, 'src'),
    
    // Entrypoint(s) for the application
    entry: [
        './main.js',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
    },
    module: {
        rules: [

            // Convert ES6 + JSX to ES5 before merging into bundle
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ],
    },

    // This is where webpack will look for modules referenced by
    // 'import' or 'require()'
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};