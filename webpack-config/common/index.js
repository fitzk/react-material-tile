export default (paths) => {
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
		node: {
			fs: "empty"
		}
	}
}
