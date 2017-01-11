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
import _getDependencies from "./../utils/get-dependencies"
import { _ExtractTextPlugin } from "./plugins"

export default ( paths ) => {
  const dependencies = _getDependencies( paths.package_json )
  const loaders = _loaders( paths )

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
      _ExtractTextPlugin
    ],
    module: {
      rules: loaders
    }
  }
}
