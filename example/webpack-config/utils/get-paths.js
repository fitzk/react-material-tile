/**
* @Author: Kayla Fitzsimmons <fitzk>
* @Date:   01-09-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tilecard
* @Filename: paths.js
* @Last modified by:   fitzk
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/
import path from "path"

export default ( dirname ) => ({
  source: path.resolve( dirname, "source" ),
  node_modules: path.resolve( dirname, "node_modules" ),
  stylesheets: path.resolve( dirname, "stylesheets" ),
  distribution: path.resolve( dirname, "distribution" ),
  entry: path.resolve( dirname, "source/index.js" ),
  package_json: path.resolve( dirname, "package.json" )
})
