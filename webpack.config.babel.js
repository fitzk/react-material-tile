import merge from 'webpack-merge'
import getPaths from "./webpack-config/utils/get-paths"
import { createVariants } from 'parallel-webpack'

import _common from "./webpack-config/common"
import _production from "./webpack-config/production"

const target = process.env.npm_lifecycle_event
const paths = getPaths(__dirname)
const common = _common(paths)
const production = _production(paths)
const development = _development(paths)

export default (env) => {
	if (env === 'production') {
		return merge(common, production)
	}
	if (env === 'development') {
		return merge(common, development)
	}
}
