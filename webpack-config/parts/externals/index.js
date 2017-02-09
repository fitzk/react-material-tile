const reactExternal = {
	root: "React", // global
	commonjs2: "react",
	commonjs: "react",
	amd: "react"
};

const reactDOMExternal = {
	root: "ReactDOM", // global
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

const materialUIExternal = {
	commonjs2: "material-ui",
	commonjs: "material-ui",
	amd: "material-ui"
};

const styledComponentsExternal = {
	commonjs: "styled-components",
	commonjs2: "styled-components/lib/index.js",
	amd: "styled-components"
};

const reactResponsiveExternal = {
	commonjs: "react-responsive",
	commonjs2: "react-responsive",
	amd: "react-responsive"
};

export default () => ({
	"react": reactExternal,
	"react-addons-transition-group": reactAddonsTransitionGroupExternal,
	"react-addons-create-fragment": reactAddonsTransitionGroupFragmentExternal,
	"react-addons-pure-render-mixin": "var React.addons.PureRenderMixin",
	"react-addons-update": "var React.addons.update",
	"styled-components": styledComponentsExternal,
	"react-responsive": reactResponsiveExternal,
	"material-ui": materialUIExternal
});
