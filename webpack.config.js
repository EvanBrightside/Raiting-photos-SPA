var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  mode: "development",
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
          options: {
            context: __dirname,
            postcss: [
              autoprefixer,
              precss
            ]
          }
        })
  ],
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.js$/,
        loader: 'eslint'
      }
    ],
    rules: [
      {
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['transform-runtime', 'react-hot-loader/babel']
            }
          }
        ]
      },
      {
        test:   /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
}
