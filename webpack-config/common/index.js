import getDependencies from "./../utils/get-dependencies"
import ExtractTextPlugin from "extract-text-webpack-plugin"

export default (paths) => {
	console.log("PATHS: ", paths)
	const extractSCSS = new ExtractTextPlugin({
		filename: '[name].scss',
		allChunks: true
	});
	const exclude = [
		"material-ui",
		"react",
		"react-dom",
		"react-tap-event-plugin"
	]
	//const dependencies = getDependencies(paths.package_json, exclude)
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
								loader: 'css-loader',
								options: {
									modules: true
								}
							},
							{
								loader: 'sass-loader'
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
