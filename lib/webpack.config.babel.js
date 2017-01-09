/**
* @Author: Kayla Fitzsimmons <kaylafitzsimmons>
* @Date:   01-07-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tile-card
* @Filename: webpack.config.babel.js
* @Last modified by:   fitzk
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/

import merge from 'webpack-merge'
import getPaths from "./webpack-config/utils/get-paths"

import _common from "./webpack-config/common"
import _development from "./webpack-config/development"
import _production from "./webpack-config/production"

const target = process.env.npm_lifecycle_event
const paths = getPaths( __dirname )
const development = _development( paths )
const common = _common( paths )
const production = _production( paths )

export default ( env ) => {
  if ( env === 'development' ) {
    return merge( common, development )
  } else if ( env === 'production' ) {
    return merge( common, production )
  }
}
