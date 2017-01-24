import path from "path"

export default (dirname) => ({
	entry: path.resolve(dirname, "lib/index.js"),
	lib: path.resolve(dirname, "lib"),
	devBuild: path.resolve(dirname, "lib/source/build"),
	node_modules: path.resolve(dirname, "node_modules"),
	stylesheets: path.resolve(dirname, "lib/source/stylesheets"),
	distribution: path.resolve(dirname, "distribution"),
	tilecard: path.resolve(dirname, "lib/source/index.js"),
	package_json: path.resolve(dirname, "package.json")
})
