const reactExternal = {
	root: 'React',
	commonjs2: 'react',
	commonjs: 'react',
	amd: 'react'
};

const reactDOMExternal = {
	root: 'ReactDOM',
	commonjs2: 'react-dom',
	commonjs: 'react-dom',
	amd: 'react-dom'
};

const reactRouterExternal = {
	root: 'ReactRouter',
	commonjs2: 'react-router',
	commonjs: 'react-router',
	amd: 'react-router'
};

const CardExternal = {
	commonjs2: 'material-ui/Card',
	commonjs: 'material-ui/Card',
	amd: 'material-ui/Card'
};

const CardHeaderExternal = {
	commonjs2: 'material-ui/Card/CardHeader',
	commonjs: 'material-ui/Card/CardHeader',
	amd: 'material-ui/Card/CardHeader'
};

const CardTextExternal = {
	commonjs2: 'material-ui/Card/CardText',
	commonjs: 'material-ui/Card/CardText',
	amd: 'material-ui/Card/CardText'
};

const AvatarExternal = {
	commonjs2: 'material-ui/Avatar',
	commonjs: 'material-ui/Avatar',
	amd: 'material-ui/Avatar'
};
export default () => ({
	'react': reactExternal,
	'react-dom': reactDOMExternal,
	'material-ui/Avatar': AvatarExternal,
	'material-ui/Card': CardExternal,
	'material-ui/Card/CardHeader': CardHeaderExternal,
	'material-ui/Card/CardText': CardTextExternal,
	'react-router': reactRouterExternal
})
