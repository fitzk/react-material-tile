import ExtractTextPlugin from "extract-text-webpack-plugin"
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from "html-webpack-plugin"

export const _ExtractTextPluginConfig = (options) => new ExtractTextPlugin({
	filename: '[name].css',
	disable: false,
	allChunks: true
})

export const _CleanWebpackPluginConfig = (distribution_path) => new CleanWebpackPlugin([
distribution_path
])

export const _HtmlWebpackPluginConfig = (template) => new HtmlWebpackPlugin({
	template: template
})
