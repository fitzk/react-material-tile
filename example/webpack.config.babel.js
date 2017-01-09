/**
* @Author: Kayla Fitzsimmons <kaylafitzsimmons>
* @Date:   01-04-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tile-card
* @Filename: webpack.config.babel.js
* @Last modified by:   kaylafitzsimmons
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/

import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import { HotModuleReplacementPlugin, NamedModulesPlugin, optimize } from "webpack"

const CommonsChunkPlugin = optimize.CommonsChunkPlugin,
  UglifyJsPlugin = optimize.UglifyJsPlugin

const paths = {
  source: path.resolve( __dirname, "source" ),
  node_modules: path.resolve( __dirname, "node_modules" )
}
const extractCSS = new ExtractTextPlugin( { filename: "[name].css" } )

export default () => ({
  entry: {
    source: [
      "babel-polyfill",
      // Needed to preserve state on re-render
      "react-hot-loader/patch",
      // WDS host and port
      "webpack-dev-server/client?http://localhost:8080",
      // entry file ./index.js
      path.resolve( __dirname, "source/index.js" )
    ],
    vendor: [
      "core-decorators",
      "highlight.js",
      "lodash",
      "material-ui",
      "react",
      "react-addons-transition-group",
      "react-dom",
      "react-tap-event-plugin"
    ]
  },
  output: {
    path: path.join( __dirname, "public" ),
    filename: "[name].js"
  },
  devtool: "source-map",
  plugins: [
    new UglifyJsPlugin( { compress: { warnings: false } } ),
    new HtmlWebpackPlugin( {
      template: path.resolve( paths.source, "template.ejs" ),
    } ),
    new HotModuleReplacementPlugin(),
    extractCSS,
    new CommonsChunkPlugin( "vendor" ),
    new NamedModulesPlugin(),
  ],
  resolve: {
    alias: {
      source: path.resolve( __dirname, "source" ),
      tilecard: path.resolve( __dirname, "node_modules/tile-card" )
    },
    modules: [
      paths.source,
      paths.node_modules
    ],
    extensions: [
      "*",
      ".js",
      ".jsx",
      ".json",
      ".css",
      ".scss",
      ".png",
      ".jpg",
      ".svg"
    ],
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: "json-loader"
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract( [ "css-loader" ] )
      },
      {
        test: /\.scss$/,
        loader: extractCSS.extract( [ "css-loader", "sass-loader" ] )
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: "file-loader"
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: paths.source,
        options: {
          // the babelrc in root is used to traspile only this config
          babelrc: false,
          // project settings are defined here
          presets: [
            [
              "es2015",
              {
                loose: true,
                modules: false
              }
            ],
            "react",
            "stage-0"
          ],
          plugins: [
            "react-hot-loader/babel",
            "transform-flow-strip-types"
          ]
        }
      },
      {
        test: /\.html$/,
        use: "file-loader"
      }
    ],
  },
  devServer: {
    hot: true,
    stats: {
      colors: true
    }
  },
  node: {
    fs: "empty",
    net: "empty"
  }
})
