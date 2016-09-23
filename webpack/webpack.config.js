/**
 * Created by Vitalii on 9/21/2016.
 */
'use strict';
const NODE_ENV = process.env.NODE_ENV || 'dev';
const webp = require('webpack');
module.exports = {
    entry: {
        //absolute dir
        //context:'',
        mod1:"./module1"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        library: "[name]"
    },
    // without reload webpack
    watch: NODE_ENV === 'dev',
    watchOptions:{
        aggregateTimeout: 100
    },

    // debbuger in source
    devtool: NODE_ENV === 'dev'?"source-map":null,

    //plugins
    plugins: [
        //do not compile if error
        new webp.NoErrorsPlugin(),
        //new webp.EnvironmentPlugin('NODE_ENV', 'USER'),
        new webp.DefinePlugin({
            NODE_ENV:JSON.stringify(NODE_ENV)
        }),
    ],

    //modules
    resolve:{
        moduleDirectories:['node_modules'],
        extensions:['','.js']
    },
    resolveLoader:{
        moduleDirectories:['node_modules'],
        moduleTemplates:['*-loader'],
        extensions:['','.js']
    },

    module: {
        loaders:[{
            test: /\.js$/,
            exclude:'node_modules',
            loader:'babel?presets[]=es2015',
        }]
    },

};

//minification module
if(NODE_ENV==='prod'){
    module.exports.plugins.push( //presets[]=es2015
        /*new webp.optimize.UglifyJsPlugin({
            compress:{
                warnings:false,
                drop_console:true,
                unsafe:true
            }
        })*/
    );
}