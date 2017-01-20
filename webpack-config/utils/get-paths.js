/**
* @Author: Kayla Fitzsimmons <fitzk>
* @Date:   01-09-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tilecard
* @Filename: paths.js
* @Last modified by:   kaylafitzsimmons
* @Last modified time: 01-19-2017
* @License: MIT
* @Copyright: 2016-present
*/
import path from "path"

export default (dirname) => ({
	entry: path.resolve(dirname, "lib/index.js"),
	lib: path.resolve(dirname, "lib"),
	node_modules: path.resolve(dirname, "node_modules"),
	stylesheets: path.resolve(dirname, "lib/source/stylesheets"),
	distribution: path.resolve(dirname, "distribution"),
	tilecard: path.resolve(dirname, "lib/source/index.js"),
	package_json: path.resolve(dirname, "package.json")
})
