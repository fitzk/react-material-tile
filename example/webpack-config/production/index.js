import { optimize } from "webpack"
const UglifyJsPlugin = optimize.UglifyJsPlugin

export default (paths) => ({
	entry: {
		example: [
			"babel-polyfill",
			paths.entry
		]
	},
	devtool: "eval-source-map",
	plugins: [
		new UglifyJsPlugin({
			beautify: false,
			sourceMap: true,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true
			},
			comments: false
		})
	]
})
