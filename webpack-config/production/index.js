import { optimize } from "webpack"
import _externals from "./externals"

export default (paths) => {
	const UglifyJsPlugin = optimize.UglifyJsPlugin;
	const externals = _externals(); // external libraries and frameworks excluded from build

	return {
		entry: {
			"react-tilecard": "./lib/source/index.js",
			"react-tilecard.min": "./lib/source/index.js"
		},
		externals: externals,
		output: {
			filename: "[name].js",
			chunkFilename: "[id].chunk.js",
			path: "distribution",
			publicPath: "/",
			libraryTarget: "umd",
			library: "ReactTileCard"
		},
		plugins: [
			new UglifyJsPlugin({
				include: /\.min\.js$/,
				minimize: true,
				compress: {
					warnings: false
				}
			})
		]
	}
}
