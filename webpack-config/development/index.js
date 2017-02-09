import HtmlWebpackPlugin from "html-webpack-plugin"
import { HotModuleReplacementPlugin, NamedModulesPlugin, optimize } from "webpack"
import _loaders from "./../parts/loaders"
import path from "path"

export default (paths) => {

	console.log("RUNNING IN DEVELOPMENT MODE".underline.blue)

	const CommonsChunkPlugin = optimize.CommonsChunkPlugin
	let file = true, json = true
	const loaders = _loaders(paths, file, json)

	const dev = {
		entry: {
			"example": [
				"babel-polyfill",
				"react-hot-loader/patch",
				"webpack-dev-server/client?http://localhost:8080",
				paths.example + "/source/index.js"
			],
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
		devServer: {
			hot: true,
			stats: {
				colors: true
			}
		},
		module: {
			rules: loaders
		},
		output: {
			filename: "[name].js",
			chunkFilename: "[id].chunk.js",
			path: paths.example + "/dist",
			publicPath: "/",
			libraryTarget: "umd",
			library: "MaterialTileExample"
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: paths.example + "/source/template.ejs",
			}),
			new CommonsChunkPlugin("vendor"),
			new NamedModulesPlugin(),
			new HotModuleReplacementPlugin()
		]
	}

	return dev
}
