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
						"add-module-exports"
					]
				}
			},
			exclude: paths.node_modules,
			include: paths.source
		}
	]
}
