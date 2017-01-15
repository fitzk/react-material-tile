import React from "react"
import Stateless from "./../stateless"
import { browserHistory } from "react-router"

export class Connected extends React.Component {

	constructor(props) {
		super(props)
	}

	setCardState() {
		let active = false
		if (this.props.query.active && this.props.query.active.includes(this.props.queryValue)) {
			active = true
		}
		active ? browserHistory.push(`/${this.props.uri}`) :
			browserHistory.push(`/${this.props.uri}?active=${ this.props.queryValue }`)
	}

	render() {
		this.setCardState()

		let _props = {
			active: active,
			title: this.props.title,
			initiallyactive: false,
			avatarSrc: this.props.avatarSrc,
			onExpandChange: this.setCardState.bind(this),
			containerClassName: this.props.cardClassName ? this.props.cardClassName : "card",
			headerClassName: this.props.headerClassName ? this.props.headerClassName : "header",
			textContainerClassName: this.props.textContainerClassName ? this.props.textContainerClassName : "grid",
			children: this.props.children,
			name: this.props.queryValue,
		}
		return (<Stateless {..._props} />)
	}
}
