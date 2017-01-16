
import React, { PropTypes, Component } from "react"
import { Card, CardHeader, CardText } from "material-ui"
import { AvatarWrapper } from "source/tile-card/avatar-wrapper"
import "./../../stylesheets/index.scss"

const TileCard = (props) => {
	const {expanded, title, subtitle, initiallyExpanded, avatarSrc, onExpandChange, cardClassName, headerClassName, children, name, order} = {
		...props
	}
	let titleStyleVisible = {
		visibility: 'visible'
	}
	let titleStyleHidden = {
		visibility: 'collapse',
	}
	let cardStyle = {
		padding: "0!important",
		//	order: expanded ? order : -5,
		height: expanded ? "auto" : "200px",
		width: expanded ? "90vw" : "200px",
		marginLeft: "5px",
		marginRight: "5px"
	}

	let avatar = <AvatarWrapper avatarSrc={ avatarSrc }
                             tileHeight={ expanded ? "50px" : "200px" }
                             tileWidth={ expanded ? "50px" : "200px" }
                             marginRight={ expanded ? "15px" : "0" } />

	let titleStyle = expanded ? titleStyleVisible : titleStyleHidden

	return (
		<Card expanded={ expanded }
        key={ `parent-${name}` }
        style={ cardStyle }
        className={ expanded ? `${cardClassName} card animated fadeIn fadeOut` : 'tile animated fadeIn' }
        zDepth={ 0 }
        onExpandChange={ onExpandChange }
        initiallyExpanded={ initiallyExpanded }>
    <CardHeader className={ expanded ? headerClassName : "tile-header" }
                style={ { padding: "0!important" } }
                titleStyle={ titleStyle }
                subtitleStyle={ titleStyle }
                title={ title }
                subtitle={ subtitle }
                avatar={ avatar }
                actAsExpander={ true } />
    <CardText expandable={ true }>
      <div id={ `child-${name}` }>
        { children }
      </div>
    </CardText>
  </Card>
	)
}
export { TileCard }

TileCard.propTypes = {
	expanded: PropTypes.bool,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	initiallyExpanded: PropTypes.bool,
	avatarSrc: PropTypes.node,
	onExpandChange: PropTypes.func,
	cardClassName: PropTypes.string,
	headerClassName: PropTypes.string
}
