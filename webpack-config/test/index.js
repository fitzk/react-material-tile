import _loaders from "./../parts/loaders"


export default (paths) => {
	let noflow = true, file = true, json = true
	const loaders = _loaders(paths)

	return {
		entry: {
			"card": paths.lib + "/source/material-tile/card/index.js"
		},
		module: {
			rules: loaders
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
