import path from "path"

export default (dirname) => ({
	entry: path.resolve(dirname, "lib/dev/index.js"),
	lib: path.resolve(dirname, "lib"),
	example: path.resolve(dirname, "example"),
	docs: path.resolve(dirname, "docs"),
	node_modules: path.resolve(dirname, "node_modules"),
	stylesheets: path.resolve(dirname, "lib/source/stylesheets"),
	distribution: path.resolve(dirname, "distribution"),
	tilecard: path.resolve(dirname, "lib/source/index.js"),
	package_json: path.resolve(dirname, "package.json")
})
