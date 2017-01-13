import { optimize } from "webpack"
const UglifyJsPlugin = optimize.UglifyJsPlugin

export const _UglifyJsPluginConfig = (beautify, sourceMap, mangle, compress, comments) => new UglifyJsPlugin({
	beautify,
	sourceMap,
	mangle: {
		screw_ie8: mangle,
		keep_fnames: mangle
	},
	compress: {
		screw_ie8: compress
	},
	comments
})
