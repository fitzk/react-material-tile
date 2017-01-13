import merge from 'webpack-merge'
import getPaths from "./webpack-config/utils/get-paths"

import _common from "./webpack-config/common"
import _development from "./webpack-config/development"
import _production from "./webpack-config/production"


const target = process.env.npm_lifecycle_event
const paths = getPaths(__dirname)
const development = _development(paths)
const common = _common(paths)
const production = _production(paths)

export default (env) => {
	if (env === 'development') {
		return merge(common, development)
	} else if (env === 'production') {
		return merge(common, production)
	}
}
