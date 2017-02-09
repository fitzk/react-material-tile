import merge from "webpack-merge"
import getPaths from "./webpack-config/utils/get-paths"

import _common from "./webpack-config/common"
import _production from "./webpack-config/production"
import _test from "./webpack-config/test"
import _development from "./webpack-config/development"
import _demo from "./webpack-config/demo"

const paths = getPaths(__dirname)



export default (env) => {
	const common = _common(paths)
	if (env === "production") {
		const production = _production(paths)
		return merge(common, production)
	}
	if (env === "development") {
		const development = _development(paths)
		return merge(common, development)
	}
	if (env === "ava") {
		const test = _test(paths)
		return merge(common, test)
	}
	if (env === "demo") {
		const demo = _demo(paths)
		return merge(common, demo)
	}
}
