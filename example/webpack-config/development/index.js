import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import DashboardPlugin from 'webpack-dashboard/plugin'
import { NamedModulesPlugin } from "webpack"

export default (paths) => ({
	entry: {
		main: [
		"babel-polyfill",
		"react-hot-loader/patch", // Needed to preserve state on re-render as of 01/09/2017
		"webpack-dev-server/client?http://localhost:8080",
		paths.entry
		]
	},
	devtool: 'eval-source-map',
	performance: {
		hints: false
	},
	plugins: [
	new NamedModulesPlugin(),
	new DashboardPlugin(),
	new FriendlyErrorsWebpackPlugin({
		clearConsole: true,
	})
	]
})
