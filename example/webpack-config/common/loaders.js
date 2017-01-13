import { _ExtractTextPluginConfig } from "./plugins"

export default (paths) => {
	const _ExtractTextPlugin = _ExtractTextPluginConfig()
	return [
		{
			test: /\.(js|jsx)$/,
			use: {
				loader: "babel-loader",
				options: {
					babelrc: false,
					cacheDirectory: true,
					presets: [
					[
					"es2015",
					{
						loose: true,
						modules: false
					}
					],
					"react",
					"stage-1"
					],
					plugins: [
					"transform-runtime"
					]
				}
			},
			exclude: paths.node_modules,
			include: paths.source,
		},
		{
			test: /\.(css|scss)$/,
			use: _ExtractTextPlugin.extract(["css-loader", "sass-loader"])
		},
		{
			test: /\.(png|jpg)$/,
			use: ["file-loader"]
		}
	]
}
