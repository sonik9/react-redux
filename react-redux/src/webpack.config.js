var path = require('path')
var webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  devtool:'source-map',
  /*entry: {
    context:'/src',
    bundle:[
    //'webpack-hot-middleware/client',
    './index'
  ]},*/
  entry:[
      './index'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  // without reload webpack
  watch: NODE_ENV === 'dev',
  watchOptions:{
    aggregateTimeout: 100
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: __dirname,

      }
    ]
  }
}
