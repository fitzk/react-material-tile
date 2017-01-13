var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
import _loaders from "./loaders"


const reactExternal = {
	root: 'React',
	commonjs2: 'react',
	commonjs: 'react',
	amd: 'react'
};

const reactDOMExternal = {
	root: 'ReactDOM',
	commonjs2: 'react-dom',
	commonjs: 'react-dom',
	amd: 'react-dom'
};

export default (paths) => {
	const loaders = _loaders(paths);
	return {

		entry: {
			'react-tilecard': './lib/source/index.js',
			'react-tilecard.min': './lib/source/index.js'
		},

		externals: {
			'react': reactExternal,
			'react-dom': reactDOMExternal
		},

		output: {
			filename: '[name].js',
			chunkFilename: '[id].chunk.js',
			path: 'distribution',
			publicPath: '/',
			libraryTarget: 'umd',
			library: 'ReactTileCard'
		},

		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}),
			new UglifyJsPlugin({
				include: /\.min\.js$/,
				minimize: true,
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
