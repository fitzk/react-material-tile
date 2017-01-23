import ExtractTextPlugin from "extract-text-webpack-plugin"

export default (paths) => {
	const extractSCSS = new ExtractTextPlugin({
		filename: "[name].scss",
		allChunks: true
	});
	return {
		resolve: {
			alias: {
				source: paths.source,
				stylesheets: paths.stylesheets
			},
			extensions: [
				"*",
				".js",
				".jsx",
				".json",
				".css",
				".scss",
				".png",
				".jpg",
				".svg"
			],
		},
		plugins: [extractSCSS],
		module: {
			rules: [
				{
					test: /\.(css|scss)$/,
					loader: extractSCSS.extract({
						loader: [
							{
								loader: "css-loader",
								options: {
									modules: true
								}
							},
							{
								loader: "sass"
							}
						],
						defaultLoader: "style-loader"
					})
				}
			]
		},
		node: {
			fs: "empty"
		}
	}
}
