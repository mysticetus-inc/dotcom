const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(
      __dirname, "src", "index.js"
    )
  },

  output: {
    path: path.join(
      __dirname, "dist"
    )
  },

  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=/[hash].[ext]"
      }, 
      {
        test: /\.json$/, loader: "json-loader"
      }, 
      {
        loader: "babel-loader",
        test: /\.js?$/,
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
        {
          loader: 'style-loader',
        },
        {
          loader: MiniCssExtractPlugin.loader, 
        }, 
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        },
        {
          loader: 'sass-loader'
        }]
      }
    ]
  },

  plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),

    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    }),

    new AssetsPlugin({
      filename: "webpack.json",
      path: path.join(process.cwd(), "site/data"),
      prettyPrint: true
		})
  ]
};
