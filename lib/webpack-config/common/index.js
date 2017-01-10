/**
* @Author: Kayla Fitzsimmons <fitzk>
* @Date:   01-09-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tilecard
* @Filename: common.js
* @Last modified by:   fitzk
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/
import _loaders from "./loaders"
import getDependencies from "./../utils/get-dependencies"
import { _ExtractTextPluginConfig, _CleanWebpackPluginConfig } from "./plugins"

export default ( paths ) => {
  const exclude = [ "material-ui" ]
  const dependencies = getDependencies( paths.package_json, exclude )
  const loaders = _loaders( paths )
  const _CleanWebpackPlugin = _CleanWebpackPluginConfig( paths.distribution )
  const _ExtractTextPlugin = _ExtractTextPluginConfig()

  return {
    entry: {
      vendor: dependencies
    },
    output: {
      path: paths.distribution,
      filename: "[name].js",
      libraryTarget: 'umd',
      library: 'tilecard'
    },
    resolve: {
      alias: {
        source: paths.source,
        stylesheets: paths.stylesheets
      },
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
    plugins: [
      _ExtractTextPlugin,
      _CleanWebpackPlugin
    ],
    module: {
      rules: loaders
    },
    node: {
      fs: "empty"
    }
  }
}
