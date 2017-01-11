/**
* @Author: Kayla Fitzsimmons <fitzk>
* @Date:   01-09-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tilecard
* @Filename: production.js
* @Last modified by:   fitzk
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/
import { optimize } from "webpack"
const UglifyJsPlugin = optimize.UglifyJsPlugin

export default ( paths ) => ({
  entry: {
    tilecard: [
      "babel-polyfill",
      paths.tilecard
    ]
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin( {
      beautify: false,
      sourceMap: true,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    } )
  ]
})
