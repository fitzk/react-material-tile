import HtmlWebpackPlugin from "html-webpack-plugin"
import { HotModuleReplacementPlugin, NamedModulesPlugin, optimize } from "webpack"
import _loaders from "./../parts/loaders"
import path from "path"

export default (paths) => {

	console.log("BUILDING DEMO".underline.blue)
	const UglifyJsPlugin = optimize.UglifyJsPlugin;
	const CommonsChunkPlugin = optimize.CommonsChunkPlugin
	let file = true, json = true
	const loaders = _loaders(paths, file, json)

	const dev = {
		entry: {
			index: paths.example + "/source/build.js",
			vendor: [
				"material-ui",
				"react",
				"react-addons-transition-group",
				"react-dom",
				"react-responsive",
				"react-router",
				"react-tap-event-plugin",
				"styled-components"
			]
		},
		module: {
			rules: loaders
		},
		output: {
			filename: "[name].js",
			chunkFilename: "[id].chunk.js",
			path: paths.docs + "/dist",
			libraryTarget: "umd",
			library: "MaterialTileExample"
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: paths.example + "/source/template.ejs",
			}),
			new CommonsChunkPlugin("vendor"),
			new NamedModulesPlugin(),
			new HotModuleReplacementPlugin(),

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

	return dev
}
