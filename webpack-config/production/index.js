var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
import _loaders from "./loaders"
import _externals from "./externals"

export default (paths) => {
	const loaders = _loaders(paths);
	const externals = _externals();
	return {
		entry: {
			'react-tilecard': './lib/source/index.js',
			'react-tilecard.min': './lib/source/index.js'
		},
		externals: externals,
		output: {
			filename: '[name].js',
			chunkFilename: '[id].chunk.js',
			path: 'distribution',
			publicPath: '/',
			libraryTarget: 'umd',
			library: 'ReactTileCard'
		},

		plugins: [
			new UglifyJsPlugin({
				include: /\.min\.js$/,
				minimize: false,
				compress: {
					warnings: false
				}
			})
		],
		module: {
			rules: loaders
		}
	}
}
