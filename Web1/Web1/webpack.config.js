var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');




module.exports = {
    target: "web",
    devtool: 'source-map',
    entry: {
        app: './src/ts/main.ts',
        vendor1: ['jquery',
            'bootstrap'
            //'jqueryui',
            //'jspanel3',
            //'jquery.splitter',
            //'jquery.fancytree',
            //'d3',
            //'Handsontable',
            //'swipebox',
            //'virtual-keyboard'           
        ]

    },
    output: {
        filename: './wwwroot/[name].bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] 
    },
    //externals: {
    //    // require("jquery") is external and available
    //    //  on the global var jQuery
    //    //"jquery": "jQuery",
    //    "Handsontable": "Handsontable",
    //    //'bootstrap': 'bootstrap',
    //    //'jqueryui': 'jqueryui',
    //    //'jspanel3': 'jspanel3',
    //    //'jquery.splitter': 'jquery.splitter',
    //    //'jquery.fancytree': 'jquery.fancytree',
    //    'd3': 'd3',
    //    //'swipebox': 'swipebox',
    //    //'virtual-keyboard': 'virtual-keyboard'
    //},
    module: {
        //rules: [
        //    {
        //        test: /\.css$/,
        //        use: ExtractTextPlugin.extract({
        //            fallback: "style-loader",
        //            use: "css-loader"
        //        })
        //    }
        //],

        loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({     
           jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        //new ExtractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor1',
            chuncks: ['app'],
            filename: './wwwroot/app.vendor.bundle1.js',
            minChunks: Infinity
        })
        //new UglifyJSPlugin({
        //    sourceMap: true
        //})
    ],
    watch: false//,
}


