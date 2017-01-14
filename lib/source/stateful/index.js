import React from "react"
import { Card } from "material-ui"
import { CardHeader } from "material-ui"
import { CardText } from "material-ui"
import { Avatar } from "material-ui"
import { Stateless } from "./../stateless"

export class Stateful extends React.Component {

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
		let _opts = {
			uniqueKey: this.state.key,
			expanded: this.state.expanded,
			onExpandChange: this.setCardState.bind(this),
			initiallyExpanded: this.props.initiallyExpanded ? this.props.initiallyExpanded : false,
			title: this.props.title,
			subtitle: this.props.subTitle,
			avatarSrc: this.props.avatarSrc,
			tileStyle: this.props.tileStyle,
			tileHeight: this.props.tileHeight,
			headerTilStyle: this.props.headerTileStyle,
			name: this.props.name,
			children: this.props.children,
			childContainerClassName: this.props.childContainerClassName ? this.props.childContainerClassName : "grid",
		}
		let _props = {}
		for (let item in _opts) {
			if (item.key !== undefined) {
				_props.key = item.key
			}
		}
		return <Stateless {..._opts}/>
	}
}
