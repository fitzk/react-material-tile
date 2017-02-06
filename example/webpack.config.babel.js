import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import { HotModuleReplacementPlugin, NamedModulesPlugin, optimize } from "webpack"

const CommonsChunkPlugin = optimize.CommonsChunkPlugin,
	UglifyJsPlugin = optimize.UglifyJsPlugin

const PATHS = {
	src: path.join(__dirname, "/source"),
}
const extractCSS = new ExtractTextPlugin({
	filename: "[name].css",
	allChunks: true
})

export default () => ({
	entry: {
		src: [
			"babel-polyfill",
			"react-hot-loader/patch",
			"webpack-dev-server/client?http://localhost:8080",
			path.join(PATHS.src, "index.js")
		],
		vendor: [
			"material-ui",
			"react",
			"react-addons-transition-group",
			"react-dom",
			"react-responsive",
			"react-router",
			"react-material-tile",
			"react-tap-event-plugin",
			"styled-components"
		]
	},
	output: {
		path: path.join(__dirname, "distribution"),
		filename: "[name].bundle.js"
	},
	devtool: "eval-source-map",
	plugins: [
		new UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new HtmlWebpackPlugin({
			template: path.join(PATHS.src, "template.ejs"),
		}),
		new HotModuleReplacementPlugin(),
		extractCSS,
		new CommonsChunkPlugin("vendor"),
		new NamedModulesPlugin(),
	],
	resolve: {
		alias: {
			src: PATHS.src,
			images: path.join(PATHS.src, "/assets/images"),
			components: path.join(PATHS.src, "components"),
			utils: path.join(PATHS.src, "utils")
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
	module: {
		rules: [
			{
				test: /\.json$/,
				use: "json-loader"
			},
			{
				test: /\.(css|scss)$/,
				use: extractCSS.extract({
					loader: [
						{
							loader: "css-loader"
						},
						{
							loader: "sass-loader"
						}
					],
					fallbackLoader: "style-loader"
				})
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
				loader: "file-loader"
			},
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				include: PATHS.src,
				options: {
					// the babelrc in root is used to traspile only this config
					babelrc: false,
					// project settings are defined here
					presets: [
						[
							"es2015",
							{
								loose: true,
								modules: false
							}
						],
						"es2017",
						"react",
						"stage-1"
					]
				}
			},
			{
				test: /\.html$/,
				use: "file-loader"
			}
		],
	},
	devServer: {
		hot: true,
		stats: {
			colors: true
		}
	},
	node: {
		fs: "empty"
	}
})
