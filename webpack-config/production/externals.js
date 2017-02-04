const reactExternal = {
	root: "React",
	commonjs2: "react",
	commonjs: "react",
	amd: "react"
};

const reactDOMExternal = {
	root: "ReactDOM",
	commonjs2: "react-dom",
	commonjs: "react-dom",
	amd: "react-dom"
};

const reactAddonsTransitionGroupExternal = {
	root: ["React", "addons", "TransitionGroup"],
	commonjs2: "react-addons-transition-group",
	commonjs: "react-addons-transition-group",
	amd: "react-addons-transition-group",
}


const reactAddonsTransitionGroupFragmentExternal = {
	root: ["React", "addons", "createFragment"],
	commonjs2: "react-addons-create-fragment",
	commonjs: "react-addons-create-fragment",
	amd: "react-addons-create-fragment",
}

const reactRouterExternal = {
	root: "ReactRouter",
	commonjs2: "react-router",
	commonjs: "react-router",
	amd: "react-router"
};


const materialUIExternal = {
	root: "MaterialUI",
	commonjs2: "material-ui",
	commonjs: "material-ui",
	amd: "material-ui"
};

const styledComponentsExternal = {
	root: "StyledComponents",
	commonjs2: "styled-components",
	commonjs: "styled-components",
	amd: "styled-components"
};

const reactResponsiveExternal = {
	root: "ReactResponsive",
	commonjs2: "react-responsive",
	commonjs: "react-responsive",
	amd: "react-responsive"
};

export default () => ({
	"react": reactExternal,
	"react-addons-transition-group": reactAddonsTransitionGroupExternal,
	"react-addons-create-fragment": reactAddonsTransitionGroupFragmentExternal,
	"react-addons-transition-group": "var React.addons.TransitionGroup",
	"react-addons-pure-render-mixin": "var React.addons.PureRenderMixin",
	"react-addons-create-fragment": "var React.addons.createFragment",
	"react-addons-update": "var React.addons.update",
	"react-router": reactRouterExternal,
	"styled-components": styledComponentsExternal,
	"react-responsive": reactResponsiveExternal,
	"material-ui": materialUIExternal
})
