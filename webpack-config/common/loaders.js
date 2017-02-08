export default (paths) => {
	return [
		{
			test: /\.(js|jsx)$/,
			use: {
				loader: "babel-loader",
				options: {
					babelrc: false,
					cacheDirectory: false,
					presets: [
						[ "env", { modules: false } ],
						"react",
						"stage-1",
						"stage-2"
					]
				}
			},
			exclude: paths.node_modules,
			include: paths.source
		}
	]
}
