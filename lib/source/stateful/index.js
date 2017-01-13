import React from "react"
import Card from "material-ui/Card"
import CardHeader from "material-ui/Card/CardHeader"
import CardText from "material-ui/Card/CardText"
import Avatar from "material-ui/Avatar"
import Stateless from "./../stateless"

export default class Stateful extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			expanded: false,
			key: "0"
		}
	}

	setCardState(state = this.state.expanded) {

		this.setState({
			expanded: state
		})
	}

	componentDidMount() {
		if (this.props.initiallyExpanded) {
			this.setCardState(true)
		}
		if (this.props.uniqueKey) {
			this.setState({
				key: this.props.uniqueKey
			})
		} else {
			this.setState({
				key: this.props.name
			})
		}
	}
	render() {
		let _props = {
			uniquekey: this.state.key,
			expanded: this.state.expanded,
			onExpandChange: this.setCardState.bind(this),
			initiallyExpanded: this.props.initiallyExpanded ? this.props.initiallyExpanded : false,
			title: this.props.title,
			subTitle: this.props.subTitle,
			avatarSrc: this.props.avatarSrc,
			tileStyle: this.props.tileStyle,
			headerTileStyle: this.props.headerTileStyle,
			name: this.props.name,
			children: this.props.children,
			childContainerClassName: this.props.childContainerClassName ? this.props.childContainerClassName : "grid",
		}
		return <Stateless {..._props} />
	}
}

Stateful.propTypes = {
	title: React.PropTypes.string.isRequired,
	avatarSrc: React.PropTypes.any.isRequired,
	name: React.PropTypes.string.isRequired,
	className: React.PropTypes.string,
	headerClassName: React.PropTypes.string,
	children: React.PropTypes.any,
	largeAvatarStyle: React.PropTypes.node,
	smallAvatarStyle: React.PropTypes.node
}
