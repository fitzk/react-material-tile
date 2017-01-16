import path from "path"

export default (dirname) => ({
	source: path.resolve(dirname, "source"),
	node_modules: path.resolve(dirname, "node_modules"),
	stylesheets: path.resolve(dirname, "stylesheets"),
	distribution: path.resolve(dirname, "distribution"),
	entry: path.resolve(dirname, "source/index.js"),
	package_json: path.resolve(dirname, "package.json")
})
