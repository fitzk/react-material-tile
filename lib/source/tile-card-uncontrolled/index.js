import React, { Component } from "react"
import { TileCardControlled } from "./../tile-card-controlled"

export class TileCard extends Component {

	constructor(props) {
		super(props)
		this.state = {
			expanded: false
		}
	}

	setCardState(state = this.state.expanded) {
		this.setState({
			expanded: state
		})
	}

	render() {

		return <TileCardControlled expanded={ this.state.expanded }
                             hideAvatarOnExpand={ this.props.hideAvatarOnExpand }
                             title={ this.props.title }
                             subtitle={ this.props.subtitle }
                             backgroundColor={ this.props.backgroundColor }
                             initiallyExpanded={ this.props.initiallyExpanded }
                             avatarSrc={ this.props.avatarSrc }
                             onExpandChange={ this.setCardState.bind(this) }
                             cardClassName={ this.props.cardClassName }
                             headerClassName={ this.props.headerClassName }
                             tileWidth={ this.props.tileWidth }
                             tileHeight={ this.props.tileHeight }
                             avatarWidth={ this.props.avatarWidth }
                             avatarHeight={ this.props.avatarHeight }
                             name={ this.props.name }>
           { this.props.children }
         </TileCardControlled>
	}
}
