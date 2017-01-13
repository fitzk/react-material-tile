import { _ExtractTextPluginConfig } from "./plugins"

export default (paths) => {
	const _ExtractTextPlugin = _ExtractTextPluginConfig()
	return [
		{
			test: /\.(css|scss)$/,
			use: _ExtractTextPlugin.extract(["css-loader", "sass-loader"])
		}
	]
}
