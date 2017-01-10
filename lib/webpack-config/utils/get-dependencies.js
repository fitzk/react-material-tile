/**
* @Author: Kayla Fitzsimmons <fitzk>
* @Date:   01-09-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tilecard
* @Filename: get-dependencies.js
* @Last modified by:   fitzk
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
* @flow
*/

export default ( path, exclude ) => {
  const package_json = require( path )
  const vendor = Object.keys( package_json.dependencies ).filter( key => !exclude.includes( key ) )
  return vendor
}
