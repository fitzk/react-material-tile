
import React, { PropTypes, Component } from "react"
import { Card, CardHeader, CardText } from "material-ui"
import { AvatarWrapper } from "source/tile-card/avatar-wrapper"
import "./../../stylesheets/index.scss"

const TileCard = (props) => {

	let titleStyleVisible = {
		visibility: 'visible'
	}
	let titleStyleHidden = {
		visibility: 'collapse',
	}
	let cardStyle = {
		padding: "0!important",
		height: props.expanded ? "auto" : props.tileHeight || "200px",
		width: props.expanded ? "90vw" : props.tileWidth || "200px",
		transition: "none",
		margin: "10px"
	}

	let avatar = <AvatarWrapper avatarSrc={ props.avatarSrc }
                             tileHeight={ props.expanded ? props.avatarHeight || "50px" : props.tileHeight || "200px" }
                             tileWidth={ props.expanded ? props.avatarWidth || "50px" : props.tileWidth || "200px" }
                             marginRight={ props.expanded ? "15px" : "0" }
                             margin={ props.expanded ? "5px!important" : "0" } />

	let titleStyle = props.expanded ? titleStyleVisible : titleStyleHidden

	return (
		<Card expanded={ props.expanded }
        key={ `parent-${name}` }
        style={ cardStyle }
        className={ props.expanded ? `${props.cardClassName} card` : 'tile animated fadeIn' }
        zDepth={ 0 }
        onExpandChange={ props.onExpandChange }
        initiallyExpanded={ props.initiallyExpanded }>
    <CardHeader className={ props.expanded ? props.headerClassName : "tile-header" }
                style={ { padding: "0!important", margin: props.expanded ? "5px" : 0 } }
                titleStyle={ titleStyle }
                subtitleStyle={ titleStyle }
                title={ props.title }
                subtitle={ props.subtitle }
                avatar={ avatar }
                actAsExpander={ true } />
    <CardText expandable={ true }>
      <div id={ `child-${props.name}` }>
        { props.children }
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
	avatarSrc: PropTypes.node.isRequired,
	onExpandChange: PropTypes.func,
	cardClassName: PropTypes.string,
	headerClassName: PropTypes.string,
	tileWidth: PropTypes.string,
	tileHeight: PropTypes.string,
	avatarWidth: PropTypes.string,
	avatarHeight: PropTypes.string
}
