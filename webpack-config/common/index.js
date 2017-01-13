import _loaders from "./loaders"
import getDependencies from "./../utils/get-dependencies"
import { _ExtractTextPluginConfig } from "./plugins"

export default (paths) => {
	const exclude = [
		"material-ui"
	]
	const dependencies = getDependencies(paths.package_json, exclude)
	const loaders = _loaders(paths)
	const _ExtractTextPlugin = _ExtractTextPluginConfig()

	return {
		entry: {
			vendor: dependencies
		},
		resolve: {
			alias: {
				source: paths.source,
				stylesheets: paths.stylesheets
			},
			extensions: [
				"*",
				".js",
				".jsx",
				".json",
				".css",
				".scss",
				".png",
				".jpg",
				".svg"
			],
		},
		plugins: [
			_ExtractTextPlugin
		],
		module: {
			rules: loaders
		},
		node: {
			fs: "empty"
		}
	}
}
