import React, { PropTypes, Component } from "react"
import { Paper } from "material-ui"
import { Tile } from "./tile"
import { Card } from "./card"

const MaterialTileCard = ({ expanded, children, ...props }) => {
	let card = <Card {...props}> { children } </Card>
	let tile = <Tile {...props}> { children } </Tile>
	return expanded ? card : tile;
}


class MaterialTile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expanded: false
		}
	}

	updateExpanded() {
		this.setState({
			expanded: !this.state.expanded
		})
	}
	render() {
		return <MaterialTileCard {...this.props} onClick={ this.updateExpanded.bind(this) } expanded={ this.state.expanded }>
           { this.props.children }
         </MaterialTileCard>
	}
}


export { MaterialTileCard, MaterialTile };
