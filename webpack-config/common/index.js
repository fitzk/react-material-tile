import ExtractTextPlugin from "extract-text-webpack-plugin"
import _loaders from "./loaders"

export default (paths) => {
	const extractSCSS = new ExtractTextPlugin({
		filename: "[name].scss",
		allChunks: true
	});
	const loaders = _loaders(paths, extractSCSS)
	return {
		resolve: {
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
			rules: loaders
		},
		node: {
			fs: "empty"
		}
	}
}
