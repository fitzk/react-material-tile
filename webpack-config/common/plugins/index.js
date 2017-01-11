/**
* @Author: Kayla Fitzsimmons <fitzk>
* @Date:   01-09-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tilecard
* @Filename: extract-text.js
* @Last modified by:   fitzk
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/

import ExtractTextPlugin from "extract-text-webpack-plugin"

export const _ExtractTextPlugin = new ExtractTextPlugin( {
  filename: '[name].css',
  disable: false,
  allChunks: true
} )
