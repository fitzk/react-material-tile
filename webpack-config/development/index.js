import { NamedModulesPlugin } from "webpack"
import { _HtmlWebpackPluginConfig } from "./plugins"
export default (paths) => {
	const _HtmlWebpackPlugin = _HtmlWebpackPluginConfig(`${paths.lib}/template.ejs`)
	return {
		entry: {
			main: [
				"babel-polyfill",
				"react-hot-loader/patch",
				"webpack-dev-server/client?http://localhost:8080",
				paths.example_entry
			],
			vendor: ["react", "react-dom", "material-ui", "styled-components"]
		},
		devtool: "eval-source-map",
		performance: {
			hints: false
		},
		devServer: {
			stats: {
				warnings: false
			},
			historyApiFallback: true
		},
		plugins: [
			new NamedModulesPlugin(),
			_HtmlWebpackPlugin
		]
	}
}
