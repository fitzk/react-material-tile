import merge from "webpack-merge"
import getPaths from "./webpack-config/utils/get-paths"

import _common from "./webpack-config/common"
import _production from "./webpack-config/production"
import _test from "./webpack-config/test"

const target = process.env.npm_lifecycle_event
const paths = getPaths(__dirname)
const common = _common(paths)
const production = _production(paths)
const test = _test(paths)

export default (env) => {
	if (env === "production") {
		return merge(common, production)
	}
	if (env === "ava") {
		return merge(common, test)
	}
}
