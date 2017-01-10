/**
* @Author: Kayla Fitzsimmons <fitzk>
* @Date:   01-09-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tilecard
* @Filename: loaders.js
* @Last modified by:   fitzk
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/
import { _ExtractTextPluginConfig } from "./plugins"

export default ( paths ) => {
  const _ExtractTextPlugin = _ExtractTextPluginConfig()
  return [
    {
      test: /\.(js|jsx)$/,
      use: {
        loader: "babel-loader",
        options: {
          babelrc: false,
          cacheDirectory: true,
          presets: [
            [
              "es2015",
              {
                loose: true,
                modules: false
              }
            ],
            "react",
            "stage-1"
          ],
          plugins: [
            "transform-runtime"
          ]
        }
      },
      exclude: paths.node_modules,
      include: paths.source,
    },
    {
      test: /\.(css|scss)$/,
      use: _ExtractTextPlugin.extract( [ "css-loader", "sass-loader" ] )
    }
  ]
}
