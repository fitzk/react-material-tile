import ExtractTextPlugin from "extract-text-webpack-plugin"
import CleanWebpackPlugin from 'clean-webpack-plugin'

export const _ExtractTextPluginConfig = (options) => new ExtractTextPlugin({
	filename: '[name].css',
	disable: false,
	allChunks: true
})
