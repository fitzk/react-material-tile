import { optimize } from "webpack"
import _externals from "./../parts/externals"
import _loaders from "./../parts/loaders"

export default (paths) => {

	const loaders = _loaders(paths)
	const externals = _externals();
	const UglifyJsPlugin = optimize.UglifyJsPlugin;

	return {
		entry: {
			"react-material-tile": "./lib/source/index.js"
		},
		output: {
			filename: "[name].js",
			chunkFilename: "[id].chunk.js",
			path: "dist",
			libraryTarget: "umd",
			library: "MaterialTile"
		},
		module: {
			rules: loaders
		},
		externals: externals,
		plugins: [
			new UglifyJsPlugin({
				include: /\.js$/,
				minimize: false,
				compress: {
					warnings: false
				},
				comments: false

			})
		]
	}
}
