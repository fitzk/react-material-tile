import _externals from "./../production"
export default (paths) => {
	let externals = _externals
	return {
		entry: {
			"card": paths.lib + "/source/material-tile/card/index.js"
		},
		externals: {
		  'cheerio': 'window',
		  'react/addons': 'react',
		  'react/lib/ExecutionEnvironment': 'react',
		  'react/lib/ReactContext': 'react',
		},
		output: {
			filename: "[name].js",
			chunkFilename: "[id].chunk.js",
			path: "test/dist",
			libraryTarget: 'umd'
		}
	}
}
