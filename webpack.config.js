const WebpackCleanupPlugin = require ('webpack-cleanup-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './docs')
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader','postcss-loader']
        })
      }, {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
    },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
            {
                loader: "file-loader",
                options: {
                    outputPath: "assets/"
                }
            }
        ]
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({template: "./src/index.html"}),
    new ExtractTextPlugin({filename: './app.bundle.css'}),
    new WebpackCleanupPlugin()
  ]
};