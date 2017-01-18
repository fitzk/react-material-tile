import React, { Component } from "react"
import { TileCardControlled } from "./../tile-card-controlled"
import { browserHistory } from "react-router"

export class TileCardRouted extends Component {

	constructor(props) {
		super(props)
		this.state = {
			expanded: false
		}
	}

	setCardState() {
		let active = false
		if (this.props.query.active && this.props.query.active.includes(this.props.queryValue)) {
			active = true
		}
		this.setState({
			expanded: active
		})
		this.state.expanded ? browserHistory.push(`/${this.props.uri}`) :
			browserHistory.push(`/${this.props.uri}?active=${ this.props.queryValue }`)
	}

	render() {
		this.setCardState()

		return <TileCardControlled expanded={ this.state.expanded }
                             hideAvatarOnExpand={ this.props.hideAvatarOnExpand }
                             title={ this.props.title }
                             subtitle={ this.props.subtitle }
                             initiallyExpanded={ this.props.initiallyExpanded }
                             avatarSrc={ this.props.avatarSrc }
                             onExpandChange={ this.setCardState.bind(this) }
                             cardClassName={ this.props.cardClassName }
                             headerClassName={ this.props.headerClassName }
                             tileWidth={ this.props.tileWidth }
                             tileHeight={ this.props.tileHeight }
                             avatarWidth={ this.props.avatarWidth }
                             avatarHeight={ this.props.avatarHeight }
                             name={ this.props.queryValue }>
           { this.props.children }
         </TileCardControlled>
	}
}

RoutedTileCard.propTypes = {
	queryValue: PropTypes.string,
	uri: PropTypes.string
}
