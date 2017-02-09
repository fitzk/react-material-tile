import colors from "colors"

const babel = (paths) => {
	let loader = {
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
				],
				plugins: [ "transform-object-rest-spread" ]
			}
		},
		exclude: [paths.node_modules, /styled-flex/],
		include: paths.source
	}


	return loader
};

export { babel }
