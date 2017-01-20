import { NamedModulesPlugin } from "webpack"

export default (paths) => {
	const _HtmlWebpackPlugin = _HtmlWebpackPluginConfig(`${paths.lib}/template.ejs`)
	return {
		entry: {
			main: [
				"babel-polyfill",
				"react-hot-loader/patch",
				"webpack-dev-server/client?http://localhost:8080",
				paths.entry
			],
			vendor: ['react', 'react-dom', 'material-ui', 'styled-components']
		},
		output: {
			path: paths.distribution,
			filename: "[name].bundle.js"
		},
		devtool: 'eval-source-map',
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
