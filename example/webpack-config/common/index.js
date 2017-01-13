import _loaders from "./loaders"
import getDependencies from "./../utils/get-dependencies"
import { _ExtractTextPluginConfig, _CleanWebpackPluginConfig, _HtmlWebpackPluginConfig } from "./plugins"

export default (paths) => {
	const exclude = ["material-ui"]
	const dependencies = getDependencies(paths.package_json, exclude)
	const loaders = _loaders(paths)
	const _CleanWebpackPlugin = _CleanWebpackPluginConfig(paths.distribution)
	const _ExtractTextPlugin = _ExtractTextPluginConfig()
	const _HtmlWebpackPlugin = _HtmlWebpackPluginConfig(`${paths.source}/template.ejs`)

	return {
		entry: {
			vendor: dependencies
		},
		output: {
			path: paths.distribution,
			filename: "[name].js"
		},
		resolve: {
			alias: {
				source: `${paths.source}`,
				stylesheets: `${paths.stylessheets}`
			},
			extensions: ["*", ".js", ".jsx", ".json", ".css", ".scss", ".png", ".jpg", ".svg"],
		},
		plugins: [_ExtractTextPlugin, _CleanWebpackPlugin, _HtmlWebpackPlugin],
		module: {
			rules: loaders
		},
		node: {
			fs: "empty"
		}
	}
}
