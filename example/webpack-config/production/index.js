import { optimize } from "webpack"
const UglifyJsPlugin = optimize.UglifyJsPlugin

export default (paths) => ({
	entry: {
		main: [
			"babel-polyfill",
			paths.entry
		]
	},
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
