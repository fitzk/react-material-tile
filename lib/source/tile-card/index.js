import React, { PropTypes, Component } from "react"
import { Paper } from "material-ui"
import { Tile } from "./tile"
import { Card } from "./card"
import styled from "styled-components"

export const TileCardUncontrolled = ({expanded, updateExpanded, customCard, ...props}) => {
	const card = customCard || <Card onClick={ updateExpanded }
                                  {...props}>
                              { props.children }
                            </Card>
	const tile = <Tile onClick={ updateExpanded }
                    {...props}>
                { props.children }
              </Tile>
	let child = expanded ? card : tile

	return child
}

class TileCardControlled extends Component {
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
		return <TileCardUncontrolled {...this.props}
                               updateExpanded={ this.updateExpanded.bind(this) }
                               expanded={ this.state.expanded }>
           { this.props.children }
         </TileCardUncontrolled>
	}
}

export { TileCardControlled }

TileCardUncontrolled.propTypes = {
	children: PropTypes.any.isRequired
}

TileCardControlled.propTypes = {
	children: PropTypes.any.isRequired
}
