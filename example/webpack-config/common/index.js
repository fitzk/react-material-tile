import getDependencies from "./../utils/get-dependencies"
import { _HtmlWebpackPluginConfig } from "./plugins"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import _loaders from "./loaders"

export default (paths) => {
	const exclude = []
	const dependencies = getDependencies(paths.package_json, exclude)

	const extractSCSS = new ExtractTextPlugin({
		filename: "[name].bundle.css",
		allChunks: true
	});

	const loaders = _loaders(paths, extractSCSS)
	const _HtmlWebpackPlugin = _HtmlWebpackPluginConfig(`${paths.source}/template.ejs`)

	return {
		entry: {
			vendor: dependencies
		},
		output: {
			path: paths.distribution,
			filename: "[name].bundle.js"
		},
		resolve: {
			extensions: ["*", ".js", ".jsx", ".json", ".css", ".scss", ".png", ".jpg", ".svg"],
		},
		plugins: [extractSCSS, _HtmlWebpackPlugin],
		module: {
			rules: loaders
		},
		node: {
			fs: "empty",
			net: "empty",
			tls: "empty"
		}
	}
}
