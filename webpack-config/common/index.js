import _loaders from "./loaders"

export default (paths) => {
	const loaders = _loaders(paths)
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
		module: {
			rules: loaders
		},
		node: {
			fs: "empty"
		}
	}
}
