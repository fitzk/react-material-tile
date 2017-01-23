import path from "path"

export default (dirname) => ({
	example_entry: path.resolve(dirname, "example/source/index.js"),
	example_dist: path.resolve(dirname, "docs/example"),
	lib: path.resolve(dirname, "lib"),
	node_modules: path.resolve(dirname, "node_modules"),
	stylesheets: path.resolve(dirname, "lib/source/stylesheets"),
	distribution: path.resolve(dirname, "distribution"),
	tilecard: path.resolve(dirname, "lib/source/index.js"),
	package_json: path.resolve(dirname, "package.json")
})
